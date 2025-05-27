import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-950 text-gray-200 p-4 flex justify-between items-center">
            <span className="font-bold text-lg">Chinmay</span>
            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/music">Music</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar
