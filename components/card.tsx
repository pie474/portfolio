import { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
    title: string
    description: string | ReactNode
    tags?: string[] // tech or tags
    link?: string
    date?: string
}

export default function Card({ title, description, tags, link, date }: Props) {
    const cardContent = (
        <div
            className={`bg-gray-800 p-4 rounded-xl shadow transition 
        ${link ? 'hover:bg-gray-700 cursor-pointer' : ''}`}
        >
            <h2 className="text-xl font-bold text-white">{title}</h2>

            {date && (
                <p className="text-xs text-gray-500 mb-2">Last updated: {date}</p>
            )}

            <p className="text-sm mt-2 text-gray-300">{description}</p>

            {tags && tags.length > 0 && (
                <div className="mt-2 text-xs text-gray-400 flex flex-wrap gap-2">
                    {tags.map((word) => (
                        <span key={word} className="bg-gray-700 px-2 py-1 rounded">
                            {word}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )

    return link ? (
        <Link href={link} className="block">
            {cardContent}
        </Link>
    ) : (
        cardContent
    )
}
