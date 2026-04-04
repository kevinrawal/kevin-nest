'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  children: string | string[]
  className?: string
  fileName?: string
}

export function CodeBlock({ children, className, fileName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const code = Array.isArray(children) ? children.join('') : children
  const language = className?.replace('language-', '') ?? 'typescript'

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group my-8 rounded-xl overflow-hidden border border-gray-800 bg-[#0d1117] shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">

        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Fake traffic lights (pro feel) */}
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>

          {/* Filename or language */}
          <span className="text-xs text-gray-400 font-mono">
            {fileName || language}
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto text-sm">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.25rem',
            background: 'transparent',
            fontSize: '0.85rem',
            lineHeight: '1.6',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'JetBrains Mono, monospace',
            },
          }}
          wrapLongLines
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}