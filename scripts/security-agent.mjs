import fs from 'fs'

const GH_TOKEN = process.env.GH_TOKEN
const REPO = process.env.GITHUB_REPOSITORY
const report = fs.readFileSync('./scanning/full-report.html', 'utf-8')
const adminReport = fs.existsSync('./scanning/admin-report.html')
  ? fs.readFileSync('./scanning/admin-report.html', 'utf-8')
  : ''

async function analyzeWithGitHubModels() {
  console.log('Analyzing ZAP reports with GitHub Models...')

  const response = await fetch('https://models.inference.ai.azure.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GH_TOKEN}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      max_tokens: 4000,
      messages: [
        {
          role: 'system',
          content: `You are a security expert analyzing ZAP penetration test reports for a Next.js 16 blog site with a single-user admin page protected by a cookie.
The stack is:
- Next.js 16 monorepo (Turborepo + pnpm)
- Admin auth via httpOnly cookie
- Deployed on Vercel
- Python FastAPI backend

Return ONLY a raw JSON array of GitHub issues. with explanation, no markdown backticks.
Each issue must follow this exact format:
{
  "title": "short title",
  "severity": "critical|high|medium|low|info",
  "body": "full markdown with ## What was found\n## Why it matters"
}
Only create issues for WARN and FAIL findings. Group related findings.`,
        },
        {
          role: 'user',
          content: `Public site ZAP report:\n${report.slice(0, 8000)}\n\nAdmin ZAP report:\n${adminReport.slice(0, 4000)}`,
        },
      ],
    }),
  })

  const data = await response.json()
  const text = data.choices?.[0]?.message?.content || '[]'

  try {
    const clean = text.replace(/```json|```/g, '').trim()
    return JSON.parse(clean)
  } catch {
    console.error('Failed to parse response:', text)
    return []
  }
}

async function createGitHubIssue(issue) {
  const labels = {
    critical: ['security', 'critical', 'bug'],
    high: ['security', 'high', 'bug'],
    medium: ['security', 'medium'],
    low: ['security', 'low'],
    info: ['security', 'info'],
  }

  const res = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GH_TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github+json',
    },
    body: JSON.stringify({
      title: `[Security] ${issue.title}`,
      body: issue.body,
      labels: labels[issue.severity] ?? ['security'],
    }),
  })

  const created = await res.json()
  console.log(`Created issue #${created.number}: ${issue.title}`)
}

async function getExistingIssues() {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/issues?labels=security&state=open`,
    {
      headers: {
        Authorization: `Bearer ${GH_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
    }
  )
  return await res.json()
}

async function main() {
  const issues = await analyzeWithGitHubModels()
  console.log(`\nFound ${issues.length} security issues\n`)

  if (issues.length === 0) {
    console.log('No issues to create!')
    return
  }

  const existing = await getExistingIssues()
  const existingTitles = existing.map(i => i.title.toLowerCase())

  for (const issue of issues) {
    if (existingTitles.some(t => t.includes(issue.title.toLowerCase()))) {
      console.log(`Skipping duplicate: ${issue.title}`)
      continue
    }
    await createGitHubIssue(issue)
    await new Promise(r => setTimeout(r, 1000))
  }

  console.log('\n Done!')
}

main().catch(console.error)