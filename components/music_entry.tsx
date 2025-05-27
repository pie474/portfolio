type Props = {
    title: string
    description: string
}

export default function MusicEntry({ title, description }: Props) {
    return (
        <div className="mb-4 border-b border-gray-700 pb-4">
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    )
}
