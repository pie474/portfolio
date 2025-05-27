import MusicEntry from '../../components/music_entry'

export default function Music() {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-6">Music</h1>
            <MusicEntry
                title="Carnatic Vocal Recital"
                description="Performed live at the Seattle Indian Music Festival 2024."
            />
            <MusicEntry
                title="Tabla Solo Performance"
                description="Played a solo tabla composition in Teen Taal at a college cultural night."
            />
            {/* More entries */}
        </div>
    )
}
