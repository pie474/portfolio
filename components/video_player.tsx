type VideoPlayerProps = {
    src: string
    caption: string
    preload?: string
}

export default function VideoPlayer({ src, caption, preload = "none" }: VideoPlayerProps) {
    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto">
            <video width="100%" controls preload={preload} className="rounded-lg shadow-lg">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="text-sm text-gray-500 mt-2 text-center">{caption}</p>
        </div>
    )
}
