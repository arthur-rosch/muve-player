import captionStyles from './captions.module.css';

import * as Tooltip from '@radix-ui/react-tooltip';
import { Captions, Controls, Gesture, Time } from '@vidstack/react';

import * as Menus from '../menus';
import * as Buttons from '../buttons';
import * as Sliders from '../sliders';
import type { Video } from '../../types';

const popupOffset = 30;

export interface VideoLayoutProps {
  video: Video;
  overlayVisible: boolean;
}

export function VideoLayout({ video, overlayVisible }: VideoLayoutProps) {
  return (
    <>
      <Gestures />
      <Captions
        className={`${captionStyles.captions} media-preview:opacity-0 media-controls:bottom-[85px] media-captions:opacity-100 absolute inset-0 bottom-2 z-10 select-none break-words opacity-0 transition-[opacity,bottom] duration-300`}
      />
      <Controls.Root
        className={`media-controls:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity ${video.fictitiousProgress && !overlayVisible ? 'pb-4' : 'pb-0'
          }`}
      >
        <Tooltip.Provider>
          <div className="flex-1" />
          <Controls.Group className="flex w-full items-center px-2">
            <div className="mr-2.5 flex items-center text-xs font-medium">
              {video.timeTraveled && <Time className="time" type="current" />}
            </div>
            {video.type !== 'Vsl' && <Sliders.Time />}
            <div className="ml-2.5 flex items-center text-xs font-medium">
              {video.videoDuration && <Time className="time" type="duration" />}
            </div>
          </Controls.Group>
          <Controls.Group className="mt-0.5 flex w-full items-center px-2 pb-2">
            {video.playAndPause && (
              <Buttons.Play tooltipAlign="start" tooltipOffset={popupOffset} />
            )}
            {video.volumeButton && <Buttons.Mute tooltipOffset={popupOffset} />}
            {video.volumeBar && <Sliders.Volume />}
            <div className="flex-1" />
            {video.speed && (
              <>
                <Buttons.SeekBackward />
                <Buttons.SeekForward />
              </>
            )}
            {video.chapterMenu && <Menus.Chapters chapters={video.Chapter} />}
            {video.fullscreen && (
              <Buttons.Fullscreen tooltipAlign="end" tooltipOffset={popupOffset} />
            )}
          </Controls.Group>
        </Tooltip.Provider>
      </Controls.Root>
    </>
  );
}

function Gestures() {
  return (
    <>
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className="absolute left-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className="absolute right-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </>
  );
}

