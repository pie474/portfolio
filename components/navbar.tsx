'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routeTitles: { [key: string]: string } = {
    '/': '',
    '/projects': 'Projects',
    '/music': 'Music',
    '/about': 'About Me',
}

export default function Navbar() {
    const pathname = usePathname()
    const currentTitle = routeTitles[pathname] || ''

    const linkClass = (path: string) =>
        pathname === path
            ? 'text-white font-semibold underline'
            : 'text-gray-400 hover:text-white transition-colors duration-200'

    return (
        <nav className="bg-gray-950 text-gray-200 p-4 flex justify-between items-center relative">
            <div className="flex space-x-4">
                <Link href="/" className="font-bold text-lg text-white">
                    Chinmay
                </Link>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 text-gray-400 font-medium hidden sm:block">
                {currentTitle}
            </div>

            <div className="flex space-x-4">
                <Link href="/projects" className={linkClass('/projects')}>Projects</Link>
                <Link href="/music" className={linkClass('/music')}>Music</Link>
                <Link href="/about" className={linkClass('/about')}>About</Link>
            </div>
        </nav>
    )
}
