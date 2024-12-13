// @ts-ignore
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Tooltip from '@radix-ui/react-tooltip';
import { BookmarkIcon, CheckCircle, CircleIcon } from 'lucide-react';
import { useMediaPlayer } from '@vidstack/react';
import { buttonClass, tooltipClass } from './buttons';
import type { Chapter } from '../types';
// @ts-ignore
interface ChapterItemProps extends DropdownMenu.MenuRadioItemProps {
  startTime: string;
  endTime: string;
  isActive?: boolean;
}
// @ts-ignore
export function ChapterItem({ children, startTime, endTime, className, ...props }: ChapterItemProps) {
  return (
    <DropdownMenu.Item
      className={
        "group relative flex w-full cursor-pointer select-none items-center justify-start rounded-md p-3 outline-none transition-colors hover:bg-white/10 data-[focus]:ring-2 data-[focus]:ring-white/20 data-[state=checked]:bg-white/5"
        
      }
      {...props}
    >
      <div className="flex items-center space-x-3 flex-1">
        <div className="flex-shrink-0">
          <CircleIcon className="h-4 w-4 text-white/70 group-data-[state=checked]:hidden" />
          <CheckCircle className="text-primary hidden h-4 w-4 group-data-[state=checked]:block" />
        </div>
        
        <div className="flex flex-col flex-1">
          <span className="text-sm font-medium text-white group-hover:text-white/90">
            {children}
          </span>
          <div className="flex items-center space-x-2 mt-0.5">
            <span className="text-xs text-white/50">{startTime}</span>
            <span className="text-xs text-white/30">-</span>
            <span className="text-xs text-white/50">{endTime}</span>
          </div>
        </div>
      </div>
    </DropdownMenu.Item>
  );
}


export interface MenuProps {
  // @ts-ignore
  side?: DropdownMenu.MenuContentProps['side'];
  // @ts-ignore
  align?: DropdownMenu.MenuContentProps['align'];
  // @ts-ignore
  offset?: DropdownMenu.MenuContentProps['sideOffset'];
  tooltipSide?: Tooltip.TooltipContentProps['side'];
  tooltipAlign?: Tooltip.TooltipContentProps['align'];
  tooltipOffset?: number;
}

const menuClass = 
  'z-[9999] min-w-[300px] max-w-[350px] rounded-lg border border-white/10 bg-black/95 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2'
;


interface MenuChaptersProps extends MenuProps {
  chapters: Chapter[];
}

export function Chapters({
  side = 'top',
  align = 'end',
  offset = 0,
  tooltipSide = 'top',
  tooltipAlign = 'center',
  tooltipOffset = 0,
  chapters,
}: MenuChaptersProps) {
  const player = useMediaPlayer();
  const currentChapter = chapters[0]?.title ?? 'None';

  return (
    <DropdownMenu.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <DropdownMenu.Trigger
            aria-label="Chapters"
            className={buttonClass}
          >
            <BookmarkIcon className="w-6 h-6" />
          </DropdownMenu.Trigger>
        </Tooltip.Trigger>
        <Tooltip.Content
          className={tooltipClass}
          side={tooltipSide}
          align={tooltipAlign}
          sideOffset={tooltipOffset}
        >
          Chapters
        </Tooltip.Content>
      </Tooltip.Root>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={menuClass}
          side={side}
          align={align}
          sideOffset={offset}
          collisionBoundary={player?.el}
        >
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center">
              <BookmarkIcon className="w-5 h-5 mr-2 text-white/70" />
              <span className="font-medium">Chapters</span>
              <span className="ml-auto text-sm text-white/50">{currentChapter}</span>
            </div>
          </div>

          <div className="p-2 max-h-[400px] overflow-y-auto custom-scrollbar">
            <DropdownMenu.RadioGroup
              className="flex flex-col space-y-1"
              value={currentChapter}
            >
              {chapters.map((chapter) => (
                // @ts-ignore
                <ChapterItem
                  key={chapter.id}
                  value={chapter.title}
                  startTime={chapter.startTime}
                  endTime={chapter.endTime}
                  onSelect={() => console.log(`${chapter.title} selected`)}
                >
                  {chapter.title}
                </ChapterItem>
              ))}
            </DropdownMenu.RadioGroup>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}