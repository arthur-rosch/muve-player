import React, { useState, useEffect } from 'react';
import { PlayButton } from '@vidstack/react';
import { PlayIcon } from '@vidstack/react/icons';

interface VideoData {
  ImageVideoPause?: boolean;
  UrlCoverImageVideoPause?: string;
  color?: string;
}

interface PauseOverlayProps {
  video: VideoData;
  onPlay: () => void;
}

export const PauseOverlay: React.FC<PauseOverlayProps> = ({ video, onPlay }) => {
  const [isVisible, setIsVisible] = useState(true);

  
  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000); 
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const handleMouseMove = () => {
    setIsVisible(true); 
  };

  return (
    <div
      className="absolute inset-0 z-10 cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={onPlay}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {video.ImageVideoPause && video.UrlCoverImageVideoPause ? (
          <div className="relative">
            <img
              src={video.UrlCoverImageVideoPause}
              alt=""
              className="w-full h-auto rounded-md"
            />
            <PlayButton
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center play-button bg-opacity-80 w-32 h-32 rounded-full hover:opacity-100 ${
                !video.color ? 'bg-transparent' : ''
              }`}
              style={video.color ? { backgroundColor: video.color } : {}}
            >
              <PlayIcon className="w-12 h-12 translate-x-px" />
            </PlayButton>
          </div>
        ) : (
          <PlayButton
            className={`flex items-center justify-center play-button bg-opacity-80 w-32 h-32 rounded-full hover:opacity-100 ${
              !video.color ? 'bg-blue-500' : ''
            }`}
            style={video.color ? { backgroundColor: video.color } : {}}
          >
            <PlayIcon className="w-12 h-12 translate-x-px" />
          </PlayButton>
        )}
      </div>
    </div>
  );
};
