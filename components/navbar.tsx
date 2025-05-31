'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routeTitles: { [key: string]: string } = {
    '/': '',
    '/projects': 'Projects',
    '/projects/balstd': 'Projects - Balancing Robot',
    '/music': 'Music',
    '/about': 'About Me',
}

function Navlink({ path, currentPath }: { path: string, currentPath: string }) {
    const linkClass =
        path === currentPath
            ? 'text-white font-semibold underline'
            : 'text-gray-400 hover:text-white transition-colors duration-200'

    return (<Link href={path} className={linkClass}>{routeTitles[path] || ''}</Link>)
}

export default function Navbar() {
    const pathname = usePathname()
    const currentTitle = routeTitles[pathname] || ''

    return (
        <nav className="fixed top-0 w-full z-50 h-15 bg-gray-950 text-gray-200 p-4 flex justify-between items-center">
            <div className="flex space-x-4">
                <Link href="/" className="font-bold text-lg text-white">
                    Chinmay
                </Link>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 text-gray-400 font-medium hidden sm:block">
                {currentTitle}
            </div>

            <div className="flex space-x-4">
                <Navlink path="/projects" currentPath={pathname} />
                <Navlink path="/music" currentPath={pathname} />
                <Navlink path="/about" currentPath={pathname} />
            </div>
        </nav>
    )
}
