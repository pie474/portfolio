import { ReactNode } from 'react'
import Link from 'next/link'
import { FaLink } from "react-icons/fa";

type Props = {
    title: string
    description: string | ReactNode
    tags?: string[]
    link?: string
    date?: string
    icon?: string | ReactNode
}

export default function Card({ title, description, tags, link, date, icon }: Props) {
    const cardInner = (
        <div
            className={`bg-gray-800 p-4 rounded-xl shadow transition 
            ${false ? 'hover:bg-gray-700 cursor-pointer' : ''}`}
        >
            <div className="flex items-start gap-4">
                {icon && (
                    <div
                        className="flex-shrink-0 text-white"
                    >
                        {typeof icon === 'string' ? (
                            <img src={icon} alt="icon" className="w-8 h-8 object-contain rounded-xs" />
                        ) : (
                            icon
                        )}
                    </div>
                )}

                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        {link ? (
                            <Link href={link} className="text-xl font-bold text-white hover:underline inline-flex items-center gap-1 group">
                                <span>{title}</span>
                                <FaLink className="text-sm text-gray-400 group-hover:text-white transition" />
                            </Link>
                        ) : (
                            <h2 className="text-xl font-bold text-white">{title}</h2>
                        )}
                        {/* <h2 className="text-xl font-bold text-white">{title}</h2> */}


                        {date && (
                            <p className="text-xs text-gray-500">Last updated: {date}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Full-width content below the icon */}
            <div className="mt-3">
                <p className="text-sm text-gray-300">{description}</p>

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
        </div >
    )

    // return link ? (
    //     <Link href={link} className="block">
    //         {cardInner}
    //     </Link>
    // ) : (
    //     cardInner
    // )
    return cardInner
}
