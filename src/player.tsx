import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';

import type { Video } from './types';
import {
  EndOverlay,
  ProgressBar,
  ContextMenu,
  VideoLayout,
  WatchingNow,
  PauseOverlay,
  VideoFormModal,
  ContinueWatching,
  VideoButtonCtaBelow,
  VideoButtonCtaInside,
  SmartAutoplayOverlay,
} from './components/';
import {
  Poster,
  MediaPlayer,
  useMediaStore,
  MediaProvider,
  isYouTubeProvider,
  type MediaPlayerInstance,
  isHLSProvider,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
  type MediaCanPlayDetail,
  type MediaCanPlayEvent,
} from '@vidstack/react';
import { useRef, useState, useEffect } from 'react';
import { useAnalytics, useContextMenu, UsePlayer } from './hooks';
import { convertDurationToSeconds } from './utils';

type PlayerProps = {
  video: Video;
};

export function Player({ video }: PlayerProps) {
  const player = useRef<MediaPlayerInstance | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  const { currentTime, playing, paused, ended } = useMediaStore(player);
  const { closeContextMenu, menuPosition, menuVisible, onContextMenu } = useContextMenu();

  const { sendViewRequest, sendViewTimestampRequest } = useAnalytics({
    videoId: video.id,
  });

  const {
    onPause,
    progress,
    handlePlay,
    handleResume,
    handleRestart,
    smartAutoPlay,
    overlayVisible,
    showResumeMenu,
    transitionDuration,
  } = UsePlayer({
    ref: player,
    videoId: video.id,
    videoSmartAutoPlay: video.smartAutoPlay || false,
  });

  const [videoFormOpen, setVideoFormOpen] = useState<boolean>(false);

  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent,
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
      provider.preconnect()
    }
  }

  function onCanPlay(detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) {
  }

  useEffect(() => {
    if (playing) {
      setStartTime(currentTime || 0);
      sendViewRequest();
    }

    if ((paused || ended) && startTime !== null) {
      sendViewTimestampRequest(startTime, currentTime);
      setStartTime(null);
    }
  }, [playing, paused, ended]);

  useEffect(() => {
    if (video?.VideoForm?.showIn) {
      const showTimeInSeconds = convertDurationToSeconds(video.VideoForm.showIn);

      if (currentTime >= showTimeInSeconds && !videoFormOpen) {
        player.current?.pause();
        setVideoFormOpen(true);
      }
    }
  }, [currentTime, video?.VideoForm?.showIn, videoFormOpen, player]);


  return (
    <div onContextMenu={onContextMenu} className="relative">
      <MediaPlayer
        src={{
          src: video.url,
          type: "video/youtube"
        }}
        ref={player}
        controls={false}
        onPause={onPause}
        crossOrigin="anonymous"
        aspectRatio={video.format}
        className="w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4"
      >
        <MediaProvider>
          <Poster className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover" />
        </MediaProvider>
        {paused && !overlayVisible && <PauseOverlay onPlay={handlePlay} video={video} />}
        {ended && !overlayVisible && <EndOverlay onPlay={handlePlay} video={video} />}
        {smartAutoPlay && overlayVisible && <SmartAutoplayOverlay video={video} onPlay={handlePlay} />}
        {video.continueWatching && showResumeMenu && (
          <ContinueWatching onRestart={handleRestart} onResume={handleResume} />
        )}
        {video.VideoForm && video.VideoForm.isActive && !overlayVisible && videoFormOpen && (
          <VideoFormModal
            videoForm={video.VideoForm}
            key={video.id}
            onClose={() => setVideoFormOpen(false)}
            onPlay={handlePlay}
          />
        )}
        {video.fictitiousProgressHeight && !overlayVisible && (
          <ProgressBar
            progress={progress}
            size={video.fictitiousProgressHeight}
            transitionDuration={transitionDuration}
            color={video.color || 'rgb(59 130 246)'}
          />
        )}
        {!overlayVisible && <VideoLayout video={video} overlayVisible={overlayVisible} />}
        {video.buttonsActive && (
          <VideoButtonCtaInside
            key={video.id}
            Buttons={video.VideoButtons}
            currentTime={currentTime}
            overlayVisible={overlayVisible}
          />
        )}
      </MediaPlayer>
      {video.watchingNow && <WatchingNow video={video} />}
      {video.buttonsActive && (
        <VideoButtonCtaBelow
          key={video.id}
          Buttons={video.VideoButtons}
          currentTime={currentTime}
          overlayVisible={overlayVisible}
        />
      )}
      {menuVisible && menuPosition && (
        <ContextMenu position={menuPosition} onClose={closeContextMenu} />
      )}
    </div>
  );
}


