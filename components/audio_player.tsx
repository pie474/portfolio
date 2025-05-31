'use client'

import { useRef, useState, useEffect } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa';

type AudioPlayerProps = {
    src: string
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
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

        const setMeta = () => setDuration(audio.duration)

        const handleEnded = () => {
            setIsPlaying(false)
            setCurrentTime(audio.duration) // or setCurrentTime(0) if you want the slider to jump back
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

    const handleSeekStart = () => {
        const audio = audioRef.current
        if (!audio) return
        setWasPlayingBeforeSeek(!audio.paused)
        audio.pause()
        setIsSeeking(true)
    }

    const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value)
        setCurrentTime(newTime)

        // If this was just a click (no drag), commit immediately
        if (!isSeeking) {
            const audio = audioRef.current
            if (audio) {
                audio.currentTime = newTime
            }
        }
    }

    const handleSeekEnd = (e: React.MouseEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.currentTarget.value)
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

    const formatTime = (s: number) => {
        const mins = Math.floor(s / 60)
        const secs = Math.floor(s % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="w-full max-w-md bg-gray-800 p-4 rounded-xl shadow text-white space-y-2">
            <audio ref={audioRef} src={src} preload="metadata" />

            <div className="flex items-center justify-between">
                <button
                    onClick={togglePlay}
                    className="bg-gray-700 hover:bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full"
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                <span className="text-sm text-gray-300">
                    {formatTime(currentTime)} / {formatTime(duration)}
                </span>
            </div>

            <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                step={0.1}
                onMouseDown={handleSeekStart}
                onChange={handleSeekChange}
                onMouseUp={handleSeekEnd}
                className="w-full cursor-pointer"
            />
        </div>
    )
}
