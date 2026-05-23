import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import track from "../assets/rewardprogram.mp3";

// Plain JS singleton — completely outside React's tree.
// React navigation, re-renders, and unmounts cannot touch this.
const audioEl = new Audio(track);

interface AudioContextType {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isMuted: boolean;
  volume: number;
  progressPct: number;
  togglePlay: () => void;
  toggleMute: () => void;
  seek: (pct: number) => void;
  changeVolume: (v: number) => void;
}

const AudioCtx = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const onTimeUpdate = () => setCurrentTime(audioEl.currentTime);
    const onMetadata = () => setDuration(audioEl.duration);
    const onEnded = () => setIsPlaying(false);

    audioEl.addEventListener("timeupdate", onTimeUpdate);
    audioEl.addEventListener("loadedmetadata", onMetadata);
    audioEl.addEventListener("ended", onEnded);

    if (audioEl.readyState >= 1) setDuration(audioEl.duration);

    return () => {
      audioEl.removeEventListener("timeupdate", onTimeUpdate);
      audioEl.removeEventListener("loadedmetadata", onMetadata);
      audioEl.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play();
    }
    setIsPlaying((p) => !p);
  };

  const toggleMute = () => {
    audioEl.muted = !isMuted;
    setIsMuted((m) => !m);
  };

  const seek = (pct: number) => {
    const t = pct * (audioEl.duration || 0);
    audioEl.currentTime = t;
    setCurrentTime(t);
  };

  const changeVolume = (v: number) => {
    audioEl.volume = v;
    setVolume(v);
    setIsMuted(v === 0);
  };

  const progressPct = duration ? (currentTime / duration) * 100 : 0;

  return (
    <AudioCtx.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        isMuted,
        volume,
        progressPct,
        togglePlay,
        toggleMute,
        seek,
        changeVolume,
      }}
    >
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
