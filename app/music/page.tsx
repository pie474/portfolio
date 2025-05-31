'use client'

import Card from '../../components/card'
import AudioPlayer from '../../components/audio_player'

import dynamic from 'next/dynamic'
const MiniAudioPlayer = dynamic(() => import('@/components/mini_audio_player'), {
    ssr: false
})

export default function Music() {
    return (
        <div>
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
                    link="https://youtu.be/A8sizwcSxDA?si=_YUWdEg9QilyTdRX&t=3458"
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
                    link="https://youtu.be/A8sizwcSxDA?si=3zH07jjWXVcNyZ9r&t=938"
                />
                <Card
                    title="Game/Music Jam 2024"
                    description="Wrote progress-reactive gameplay music for a sisyphean game called Elysium Ascent."
                    date="Nov 2024"
                    tags={['composition', 'mockup']}
                    link="https://jaheimftc.itch.io/elysium-ascent"
                    icon={<MiniAudioPlayer src="music/single_demo.mp3" diameter={50} />}
                />
                <Card
                    title="Game/Music Jam 2023"
                    description="Wrote title screen music for a medieval game called Legacy. My team won Best Music!"
                    tags={['composition', 'mockup']}
                    date="Nov 2023"
                    icon={<MiniAudioPlayer src="music/Title2xloop.mp3" diameter={50} />}
                />
                <Card
                    title="Crystalline Ice Caves"
                    description="Background music I composed for a hypothetical Celeste-inspired game stage, including variations for different sub-regions."
                    tags={['composition', 'mockup']}
                    date="May 2023"
                    icon={<MiniAudioPlayer src="music/crystalline_ice_caves5.mp3" diameter={50} />}
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
