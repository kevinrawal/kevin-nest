export interface SocialLink {
  name: string
  label: string
  href: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    label: 'GitHub Profile',
    href: 'https://github.com',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    label: 'Twitter Profile',
    href: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    name: 'LeetCode',
    label: 'LeetCode Profile',
    href: 'https://leetcode.com',
    icon: 'Code',
  },
  {
    name: 'Email',
    label: 'Send Email',
    href: 'mailto:kevin@example.com',
    icon: 'Mail',
  },
]
