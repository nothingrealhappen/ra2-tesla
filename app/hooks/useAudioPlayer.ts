import { useState, useRef, useCallback } from 'react';
import type { Sound } from '~/types/sound';

export function useAudioPlayer() {
  const [currentSound, setCurrentSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback((sound: Sound) => {
    // Stop any currently playing sound
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Create and play new audio
    const audio = new Audio(sound.r2Url);
    audio.play().catch(err => {
      console.error('Error playing sound:', err);
      setIsPlaying(false);
    });

    audioRef.current = audio;
    setCurrentSound(sound);
    setIsPlaying(true);

    // Handle audio end
    audio.onended = () => {
      setIsPlaying(false);
      setCurrentSound(null);
    };
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlaying(false);
    setCurrentSound(null);
  }, []);

  return { currentSound, isPlaying, play, stop };
}
