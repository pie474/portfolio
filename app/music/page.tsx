'use client'

import Card from '@/components/card'

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
                    title="Henry"
                    description="One of my assignments for a music composition class I took, based off of an art piece at the Henry Art Gallery."
                    tags={['composition', 'synth', 'mockup']}
                    date="Nov 2023"
                    icon={<MiniAudioPlayer src="music/henryTrimmed.mp3" diameter={50} />}
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
                    tags={['composition', 'mockup', 'WIP']}
                    date="May 2023"
                    icon={<MiniAudioPlayer src="music/crystalline_ice_caves5.mp3" diameter={50} />}
                />
                <Card
                    title="IHNC (I Have No Clue)"
                    description="Originally a piano sketch I make on my phone during a flight (that I had no clue how to name), this driving fusion piece blends a traditional symphonic sound with non-Western instruments, including hammered dulcimer, tabla, tanpura, shehnai, and panpipes."
                    tags={['composition', 'orchestral', 'mockup', 'WIP']}
                    date="Mar 2023"
                    icon={<MiniAudioPlayer src="music/ihnc3_mastered.mp3" diameter={50} />}
                />
                <Card
                    title="Super Smash Bros Ultimate Jazz"
                    description="What started as a funky bassline I imagined over the original theme turned into a full-fledged arrangement, with live saxes recorded in a recording studio myself!"
                    tags={['arrangement', 'mockup', 'live stems', 'WIP']}
                    date="Mar 2023"
                    icon={<MiniAudioPlayer src="music/smash3.mp3" diameter={50} />}
                />
                <Card
                    title="Fresh Breezes of Dawn"
                    description="A arrangement of Yu-Peng Chen's track Fresh Breezes of Dawn from Genshin Impact. I retroactively made a score for this one which can be found on my Musescore page."
                    tags={['arrangement', 'orchestral', 'mockup']}
                    date="Jun 2022"
                    icon={<MiniAudioPlayer src="music/poking_battle_3.mp3" diameter={50} />}
                    link="https://musescore.com/user/23432856/scores/21733810?share=copy_link"
                />
                <Card
                    title="The Secret Number Rescore"
                    description="My entry for the Indie Film Music Competition. I got 6th place in my division!"
                    tags={['composition', 'mockup', 'film']}
                    date="Jun 2022"
                    link="https://youtu.be/vgMGpb2j1J0"
                />
                <Card
                    title="Pokemon Battle Theme"
                    description="A reimagining of the classic Pokemon Battle Theme with every sound I could throw at it, including a rock drum set (completely MIDI programmed by hand in my DAW), jazz big band, symphony orchestra, and various synthesizers (both atmospheric and 8-bit)"
                    tags={['arrangement', 'mockup', 'WIP']}
                    date="Jun 2022"
                    icon={<MiniAudioPlayer src="music/poking_battle_3.mp3" diameter={50} />}
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
