import '@vidstack/react/player/styles/base.css';

import { useEffect, useRef } from 'react';

import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
  useMediaStore,
  type MediaCanPlayDetail,
  type MediaCanPlayEvent,
  type MediaPIPChangeEvent,
  type MediaPIPErrorEvent,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
} from '@vidstack/react';

import { VideoLayout } from './components/layouts/video-layout';
import { textTracks } from './tracks';

export function Player() {
  let player = useRef<MediaPlayerInstance>(null);
  const { canPictureInPicture, pictureInPicture } = useMediaStore(player);

  console.log(canPictureInPicture, pictureInPicture);

  useEffect(() => {
    // Subscribe to state updates.
    return player.current!.subscribe(({ paused, viewType }) => {
      // console.log('is paused?', '->', state.paused);
      // console.log('is audio view?', '->', state.viewType === 'audio');
    });
  }, []);

  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent,
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  // We can listen for the `can-play` event to be notified when the player is ready.
  function onCanPlay(detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) {
    // ...
  }

  function onPIPChange(isActive: boolean, nativeEvent: MediaPIPChangeEvent) {
    const requestEvent = nativeEvent.request;
    console.log(requestEvent)
  }

  function onPIPError(error: unknown, nativeEvent: MediaPIPErrorEvent) {
    const requestEvent = nativeEvent.request;
    console.log(requestEvent)
  }

  return (
    <MediaPlayer
      className="w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4"
      title="Sprite Fight"
      src="https://www.youtube.com/watch?v=BU8-GA0a06g"
      crossOrigin
      playsInline
      onProviderChange={onProviderChange}
      onCanPlay={onCanPlay}
      ref={player}
      onPictureInPictureChange={onPIPChange} onPictureInPictureError={onPIPError}
    >
      <MediaProvider>
        <Poster
          className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
          src="https://files.vidstack.io/sprite-fight/poster.webp"
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        />
        {textTracks.map((track) => (
          <Track {...track} key={track.src} />
        ))}
      </MediaProvider>

      <VideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" />
    </MediaPlayer>
  );
}
