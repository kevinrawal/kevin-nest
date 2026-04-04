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
    href: 'https://github.com/kevinrawal',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/kevinrawal/',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    label: 'Twitter Profile',
    href: 'https://x.com/kevinrawal',
    icon: 'Twitter',
  },
  {
    name: 'LeetCode',
    label: 'LeetCode Profile',
    href: 'https://leetcode.com/u/kevinrawal/',
    icon: 'Code',
  },
  {
    name: 'Email',
    label: 'Send Email',
    href: 'mailto:kevinrawal30@gmail.com',
    icon: 'Mail',
  },
]
