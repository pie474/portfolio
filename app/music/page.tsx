import Card from '../../components/card'

export default function Music() {
    return (
        <div>
            {/* <h1 className="text-3xl font-semibold mb-6">Projects</h1> */}

            <div className="grid md:grid-cols-2 gap-4">
                <Card
                    title="Frieren Medley"
                    description={
                        <>
                            Arranged a symphonic medley of Evan Call's music, from animes{' '}
                            <em>Violet Evergarden</em> and <em>Frieren: Beyond Journey&apos;s End</em>. Performed by Music for Charity at UW.
                        </>
                    }
                    tags={['arrangement', 'orchestral', 'performed']}
                    date="May 2025"
                />
                <Card
                    title="Isabella's Lullaby"
                    description={
                        <>
                            Arranged <em>Isabella's Lullaby</em> by Takahiro Obata from anime{' '}
                            <em>A Promised Neverland</em>. Performed by Music for Charity at UW.
                        </>
                    }
                    tags={['arrangement', 'orchestral', 'performed']}
                    date="May 2025"
                />
                <Card
                    title="Game/Music Jam 2024"
                    description="Wrote progress-reactive gameplay music for a sysyphean game called Elysium Ascent."
                    date="Nov 2024"
                    tags={['composition', 'mockup']}
                    link="https://jaheimftc.itch.io/elysium-ascent"
                />
                <Card
                    title="Game/Music Jam 2023"
                    description="Wrote title screen music for a medieval game called Legacy. My team won Best Music!"
                    tags={['composition', 'mockup']}
                    date="Nov 2023"
                />
                <Card
                    title="Crystalline Ice Caves"
                    description="Background music I composed for a hypothetical Celeste-inspired game stage, including variations for different sub-regions."
                    tags={['composition', 'mockup']}
                    date="May 2023"
                />
            </div>


            <div className="bg-gray-800 p-4 rounded-xl shadow-md mt-8">
                <h2 className="text-lg font-semibold text-white mb-2">Online Scores</h2>
                <p className="text-gray-300">
                    View my arrangements published on&nbsp;
                    <a
                        href="https://musescore.com/user/23432856"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        MuseScore
                    </a>!
                </p>
            </div>

        </div>
    )
}
