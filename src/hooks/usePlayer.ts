import { useState, useEffect } from "react";
import { useMediaStore, type MediaPlayerInstance } from "@vidstack/react";
import { getVideoTimeFromCookie, setVideoTimeCookie } from "../utils";

interface UsePlayerProps {
  videoId: string;
  videoSmartAutoPlay: boolean;
  ref: React.RefObject<MediaPlayerInstance | null>;
}

export const UsePlayer = ({ ref, videoId, videoSmartAutoPlay }: UsePlayerProps) => {
  const { currentTime, paused, ended, duration } = useMediaStore(ref);

  const [progress, setProgress] = useState(0);
  const [lastTime, setLastTime] = useState<number>(0);
  const [smartAutoPlay, setSmartAutoPlay] = useState(false);
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(!!videoSmartAutoPlay);


  useEffect(() => {
    const savedTime = getVideoTimeFromCookie(videoId);
    if (savedTime) {
      setLastTime(savedTime);
      setShowResumeMenu(true);
    }
  }, [videoId]);

  const handleCanPlay = async () => {
    if (ref.current) {
      ref.current.muted = true;
      try {
        await ref.current.play();
        console.log("Reprodução automática bem-sucedida.");
        setOverlayVisible(true);
      } catch (error) {
        console.error("Falha ao reproduzir automaticamente:", error);
      }
    }
  };

  useEffect(() => {
    if (smartAutoPlay && ref.current) {
      ref.current.addEventListener("canplay", handleCanPlay);

      return () => {
        ref.current?.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, [smartAutoPlay, ref]);

  useEffect(() => {
    if (!paused) {
      if (currentTime <= 1) {
        const newProgress = Math.min((currentTime / 1) * 40, 40);
        setProgress(newProgress);
        setTransitionDuration(300);
      } else if (duration > 1) {
        const remainingTime = duration - 1;
        const timeElapsedSinceFastStart = currentTime - 1;
        const additionalProgress =
          (timeElapsedSinceFastStart / remainingTime) * 60;
        const newProgress = Math.min(40 + additionalProgress, 100);
        setProgress(newProgress);
        setTransitionDuration(1000);
      }
    }
  }, [currentTime, duration, paused]);

  const onPause = () => {
    if (ref.current) {
      setVideoTimeCookie(videoId, currentTime);
    }
  };

  const handlePlay = () => {
    if (ref.current) {
      ref.current.muted = false;
      if (overlayVisible) {
        ref.current.currentTime = 0;
      }
      ref.current.play();
      setOverlayVisible(false);
    }
  };

  const handleResume = () => {
    if (ref.current && lastTime) {
      ref.current.currentTime = lastTime;
      ref.current.play();
      setShowResumeMenu(false);
    }
  };

  const handleRestart = () => {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.play();
      setShowResumeMenu(false);
    }
  };

  return {
    onPause,
    handlePlay,
    handleResume,
    handleRestart,
    ended,
    paused,
    progress,
    currentTime,
    smartAutoPlay,
    overlayVisible,
    showResumeMenu,
    transitionDuration,
  };
};
