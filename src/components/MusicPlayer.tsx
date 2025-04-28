
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Note: Replace the audio src with a valid ambient music URL
  return (
    <div className="fixed bottom-6 right-6 z-40 bg-dark-primary/70 backdrop-blur-md p-4 rounded-full shadow-lg flex items-center gap-2">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/audio/2022/03/15/audio_c9a4a1a97b.mp3"
      />
      
      <Button 
        variant="ghost" 
        size="icon"
        onClick={togglePlay}
        className="w-10 h-10 rounded-full hover:bg-highlight-purple/20"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </Button>
      
      <div className="hidden sm:block">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-2 bg-highlight-purple/30 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
