import '@vidstack/react/player/styles/base.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useAnalytics, useContextMenu, UsePlayer } from './hooks';
import {
  Poster,
  MediaPlayer,
  MediaProvider,
  type MediaCanPlayEvent,
  type MediaCanPlayDetail,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
  isYouTubeProvider,
  useMediaStore,
} from '@vidstack/react';
import type { Video } from './types';
import { GET_VIDEO } from './querys';
import {
  ContinueWatching,
  ContextMenu,
  VideoLayout,
  VideoButtonCtaBelow,
  WatchingNow,
  VideoButtonCtaInside,
  SmartAutoplayOverlay,
  EndOverlay,
  PauseOverlay,
  ProgressBar,
  VideoFormModal,
} from './components/';


export function Player() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get('videoId');

  const player = useRef<MediaPlayerInstance | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  
  
  const { currentTime, playing, paused, ended } = useMediaStore(player);
  const { closeContextMenu, menuPosition, menuVisible, onContextMenu } = useContextMenu();
  const { loading, error, data } = useQuery(GET_VIDEO, { variables: { id: videoId } });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.video) {
    return null
  }

  const video: Video = data.video;

 const { sendViewRequest, sendViewTimestampRequest } = useAnalytics({
    videoId: videoId!,
  });

  const {
    handleRestart,
    handleResume,
    onPause,
    showResumeMenu,
    overlayVisible,
    handlePlay,
    progress,
    transitionDuration,
    smartAutoPlay,
  } = UsePlayer({
    ref: player,
    videoSmartAutoPlay: video.smartAutoPlay!,
    videoId: videoId!,
  });

  const onProviderChange = (
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent,
  ) => {
    if (isYouTubeProvider(provider)) {
      provider.preconnect();
      provider.cookies;
    }
  };

  const onCanPlay = (detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) => {
    console.log(nativeEvent.request, detail);
  };

  useEffect(() => {
    if (playing) {
      setStartTime(currentTime || 0);  
      sendViewRequest();
      console.log(playing, paused, ended)
    }
  
    if ((paused || ended) && startTime !== null) {
      sendViewTimestampRequest(startTime, currentTime);
      
      setStartTime(null);
    }
  }, [playing, paused, ended]);

  const [videoFormOpen, setVideoFormOpen] = useState<boolean>((video.VideoForm && !overlayVisible && video.VideoForm.isActive) || false);

  return (
    <div onContextMenu={onContextMenu} className="relative">
      <MediaPlayer
        src={video?.url}
        playsInline
        ref={player}
        load="visible"
        controls={false}
        onPause={onPause}
        onCanPlay={onCanPlay}
        crossOrigin="anonymous"
        aspectRatio={video?.format}
        onProviderChange={onProviderChange}
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
          <VideoFormModal videoForm={video.VideoForm!} key={video.id} onClose={() => setVideoFormOpen(false)} onPlay={handlePlay}/>
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
