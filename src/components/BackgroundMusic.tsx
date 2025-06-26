
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundMusicProps {
  audioSrc: string;
}

const BackgroundMusic = ({ audioSrc }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.loop = true;
    audio.volume = 0.3; // Set volume to 30%
    
    // Auto-play when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Auto-play prevented by browser, user interaction required');
      }
    };

    playAudio();

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [audioSrc]);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error toggling audio:', error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Music Control Button */}
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <button
          onClick={togglePlayPause}
          className="bg-white/90 backdrop-blur-xl rounded-full p-3 shadow-lg border border-white/50 hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl"
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? (
            <span className="text-lg">⏸️</span>
          ) : (
            <span className="text-lg">▶️</span>
          )}
        </button>
        
        <button
          onClick={toggleMute}
          className="bg-white/90 backdrop-blur-xl rounded-full p-3 shadow-lg border border-white/50 hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-gray-700" />
          ) : (
            <Volume2 className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>
    </>
  );
};

export default BackgroundMusic;
