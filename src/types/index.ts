export interface VideoButton {
  id: string;
  buttonType: string;
  buttonText: string;
  buttonSize: string;
  buttonLink: string;
  startTime: string;
  endTime: string;
  buttonAfterTheVideoEnds?: boolean;
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  buttonPosition?: string;
}

export interface Chapter {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
}

export interface Video {
  id: string;
  url: string;
  thumbnail?: string;
  format: string;
  duration: string;
  type: string;
  fictitiousProgress?: boolean;
  color?: string;
  colorSmartPlayers?: string;
  playAndPause?: boolean;
  progressBar?: boolean;
  timeTraveled?: boolean;
  videoDuration?: boolean;
  volumeButton?: boolean;
  volumeBar?: boolean;
  speed?: boolean;
  fullscreen?: boolean;
  smartAutoPlay?: boolean;
  UrlCoverSmartAutoPlay?: string;
  TextTopSmartAutoPlay?: string;
  TextButtonSmartAutoPlay?: string;
  continueWatching?: boolean;
  watchingNow?: boolean;
  watchingNowFontSize?: string;
  watchingNowBgColor?: string;
  watchingNowTextColor?: string;
  ImageVideoPause?: boolean;
  UrlCoverImageVideoPause?: string;
  ImageOfFinished?: boolean;
  chapterMenu?: boolean;
  buttonsActive?: boolean;
  UrlCoverImageOfFinished?: string;
  fictitiousProgressHeight?: string;
  VideoButtons: VideoButton[];
  Chapter: Chapter[];
  VideoForm?: VideoForm
}

export interface VideoForm {
  id: string;
  inputEmail: boolean;
  inputPhone: boolean;
  inputName: boolean;
  isActive: boolean;
  showIn: string;
  videoId: string
}