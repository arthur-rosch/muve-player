import React from 'react';
import { SpeakerSimpleSlash } from '@phosphor-icons/react';

interface VideoData {
  colorSmartPlayers?: string;
  TextTopSmartAutoPlay?: string;
  TextButtonSmartAutoPlay?: string;
}

interface SmartAutoplayOverlayProps {
  video: VideoData;
  onPlay: () => void;
}

export const SmartAutoplayOverlay: React.FC<SmartAutoplayOverlayProps> = ({
  video,
  onPlay,
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-[2px] z-10 animate-in fade-in duration-300">
      <div
        onClick={onPlay}
        style={
          video.colorSmartPlayers
            ? { backgroundColor: video.colorSmartPlayers }
            : {}
        }
        className={`p-4 flex items-center justify-center bg-[#187BF0] text-white gap-12 rounded`}
      >
        <SpeakerSimpleSlash size={64} />
        <div>
          <p className="text-lg">{video.TextTopSmartAutoPlay}</p>
          <p className="text-lg">{video.TextButtonSmartAutoPlay}</p>
        </div>
      </div>
    </div>
  );
};