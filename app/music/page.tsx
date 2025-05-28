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
                    link="/music/frieren-medley"
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
                    link="/music/frieren-medley"
                    date="May 2025"
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
