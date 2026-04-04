'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
    {label: 'home', href: '/'},
    {label: 'projects', href: '/projects'},
    {label: 'blog', href: '/blog'},
]

export function Navbar() {
    const pathname = usePathname()

    return(
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md">
            <nav className="flex items-center justify-center py-4 px-4">
                <div className="flex font-jetbrains-mono text-sm">
                   {tabs.map((tab) => {
                    const isActive = pathname === tab.href
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`
                                relative px-7 py-2.5 border -ml-px first:ml-0
                                transition-all duration-200 select-none tracking-wide
                                ${isActive ? 'bg-kevin-red text-white border-kevin-red z-10 shadow-sm shadow-kevin-red/20' 
                                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover"text-gray-900 hover:border-gray-400'}
                                `}
                        >
                            {isActive && (
                                <span className="text-white mr-1.5 text-xs">&gt;</span>
                            )}
                            {tab.label}
                        </Link>
                    )
                   })}
                </div>
            </nav>
            {/* subtle red accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-kevin-red/20 to-transparent" />
        </header>
    )
}
