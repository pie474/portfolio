'use client'

import { useRef, useState, useEffect } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

type MiniAudioPlayerProps = {
    src: string
    diameter?: number
    barWidth?: number
}

export default function MiniAudioPlayer({ src, diameter = 80, barWidth = 6 }: MiniAudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isSeeking, setIsSeeking] = useState(false)
    const [wasPlayingBeforeSeek, setWasPlayingBeforeSeek] = useState(false)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const updateTime = () => {
            if (!isSeeking) {
                setCurrentTime(audio.currentTime)
            }
        }

        const setMeta = () => {
            setDuration(audio.duration)
        }
        const handleEnded = () => {
            setIsPlaying(false)
            setCurrentTime(0)
        }

        audio.addEventListener('timeupdate', updateTime)
        audio.addEventListener('loadedmetadata', setMeta)
        audio.addEventListener('ended', handleEnded)

        // audio.load()

        return () => {
            audio.removeEventListener('timeupdate', updateTime)
            audio.removeEventListener('loadedmetadata', setMeta)
            audio.removeEventListener('ended', handleEnded)
        }
    }, [isSeeking])


    const togglePlay = () => {
        const audio = audioRef.current
        if (!audio) return

        if (audio.ended || audio.currentTime === audio.duration) {
            audio.currentTime = 0
        }

        if (audio.paused) {
            audio.play()
            setIsPlaying(true)
        } else {
            audio.pause()
            setIsPlaying(false)
        }
    }

    const getTimeFromMouse = (e: React.MouseEvent<SVGSVGElement>): number | undefined => {
        const svg = e.currentTarget
        if (!svg) return

        const bbox = svg.getBoundingClientRect?.()
        if (!bbox) return

        const centerX = bbox.left + bbox.width / 2
        const centerY = bbox.top + bbox.height / 2
        const dx = e.clientX - centerX
        const dy = e.clientY - centerY
        let angle = Math.atan2(dx, -dy) * (180 / Math.PI)
        if (angle < 0) angle += 360

        return (angle / 360) * duration
    }

    const handleSeekStart = () => {
        const audio = audioRef.current
        if (!audio) return
        setWasPlayingBeforeSeek(!audio.paused)
        audio.pause()
        setIsSeeking(true)
    }

    const handleSeekChange = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        if (!isSeeking) return

        const newTime = getTimeFromMouse(e)
        if (!newTime) return

        setCurrentTime(newTime)
    }

    const handleSeekEnd = (e: React.MouseEvent<SVGSVGElement>) => {
        if (!isSeeking) return
        const newTime = getTimeFromMouse(e)
        if (!newTime) return

        const audio = audioRef.current
        if (!audio) return

        audio.currentTime = newTime
        setCurrentTime(newTime)
        setIsSeeking(false)

        if (wasPlayingBeforeSeek) {
            audio.play()
            setIsPlaying(true)
        }
    }


    const normalized = duration > 0 ? currentTime / duration : 0
    const circumference = Math.PI * (diameter - barWidth)
    const dashOffset = circumference * (1 - normalized)

    return (
        <div
            style={{ width: `${diameter}px`, height: `${diameter}px` }}
            className="relative"
        >
            <audio ref={audioRef} src={src} preload="metadata" />

            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${diameter} ${diameter}`}
                onMouseDown={handleSeekStart}
                onMouseMove={handleSeekChange}
                onMouseUp={handleSeekEnd}
                onMouseLeave={handleSeekEnd}
                className="absolute top-0 left-0"
            >
                <circle
                    cx={diameter / 2}
                    cy={diameter / 2}
                    r={(diameter - barWidth) / 2}
                    fill="none"
                    stroke="#444"
                    strokeWidth={barWidth}
                />
                <circle
                    cx={diameter / 2}
                    cy={diameter / 2}
                    r={(diameter - barWidth) / 2}
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth={barWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${diameter / 2} ${diameter / 2})`}
                    className="transition-all duration-75 ease-linear"
                />
            </svg>

            <button
                onClick={togglePlay}
                style={{ width: `${diameter - barWidth * 3}px`, height: `${diameter - barWidth * 3}px` }}
                className="rounded-full bg-gray-800 text-white flex items-center justify-center shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-gray-700"
            >
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
        </div>
    )
}
