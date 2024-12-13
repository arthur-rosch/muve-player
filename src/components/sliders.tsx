import { useEffect, useState } from 'react';

import * as Slider from '@radix-ui/react-slider';
import {
  formatTime,
  Thumbnail,
  useMediaRemote,
  useMediaState,
  useSliderPreview,
} from '@vidstack/react';

export function Volume() {
  const volume = useMediaState('volume'),
    canSetVolume = useMediaState('canSetVolume'),
    isMuted = useMediaState('muted'),
    remote = useMediaRemote();

  if (!canSetVolume) return null;

  const valeu = isMuted ? [0] : [volume * 100]

  return (
    <Slider.Root
      className="group relative inline-flex h-7 w-full max-w-24 cursor-pointer touch-none select-none items-center outline-none"
      value={valeu}
      onValueChange={([value]) => {
        remote.changeVolume(value / 100);
      }}
    >
      <Slider.Track className="h-[3px] w-full rounded-sm bg-white/30 relative">
        <Slider.Range className="bg-media-brand absolute h-full rounded-sm will-change-[width]" />
      </Slider.Track>
      <Slider.Thumb
        aria-label="Volume"
        className="block h-[15px] w-[15px] rounded-full border border-[#cacaca] bg-white outline-none opacity-0 ring-white/40 transition-opacity group-hocus:opacity-100 focus:opacity-100 focus:ring-4 will-change-[left]"
      />
    </Slider.Root>
  );
}

export function Time() {
  const time = useMediaState('currentTime'),
    canSeek = useMediaState('canSeek'),
    duration = useMediaState('duration'),
    seeking = useMediaState('seeking'),
    remote = useMediaRemote(),
    step = (1 / duration) * 100,
    [value, setValue] = useState(0),
    { previewRootRef, previewRef, previewValue } = useSliderPreview({
      clamp: true,
      offset: 6,
      orientation: 'horizontal',
    }),
    previewTime = (previewValue / 100) * duration;

  
  useEffect(() => {
    if (seeking) return;
    setValue((time / duration) * 100);
  }, [time, duration]);

  return (
    <Slider.Root
      className="group relative inline-flex h-4 w-full cursor-pointer touch-none select-none items-center outline-none"
      value={[value]}
      disabled={!canSeek}
      step={Number.isFinite(step) ? step : 1}
      ref={previewRootRef}
      onValueChange={([value]) => {
        setValue(value);
        remote.seeking((value / 100) * duration);
      }}
      onValueCommit={([value]) => {
        remote.seek((value / 100) * duration);
      }}
    >
      <Slider.Track className="h-[4px] w-full rounded-sm bg-white/30 relative">
        <Slider.Range className="bg-media-brand absolute h-full rounded-sm will-change-[width]" />
      </Slider.Track>

      <Slider.Thumb
        aria-label="Current Time"
        className="block h-[15px] w-[15px] rounded-full border border-[#cacaca] bg-white outline-none opacity-0 ring-white/40 transition-opacity group-hocus:opacity-100 focus:opacity-100 focus:ring-4 will-change-[left]"
      />

      
      <div
        className="flex flex-col items-center absolute opacity-0 data-[visible]:opacity-100 transition-opacity duration-200 will-change-[left] pointer-events-none"
        ref={previewRef}
      >
        <span className="text-[13px]">{formatTime(previewTime)}</span>
      </div>
    </Slider.Root>
  );
}
