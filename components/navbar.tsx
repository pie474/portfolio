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

    return (
        <nav className="bg-gray-950 text-gray-200 p-4 flex justify-between items-center relative">
            {/* Left: site name or nav */}
            <div className="flex space-x-4">
                <Link href="/" className="font-bold text-lg text-white">
                    Chinmay
                </Link>
                {/* Optional: side nav links here */}
            </div>

            {/* Center: current page title */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-gray-400 font-medium">
                {currentTitle}
            </div>

            {/* Right: nav links */}
            <div className="flex space-x-4">
                <Link href="/projects">Projects</Link>
                <Link href="/music">Music</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    )
}
