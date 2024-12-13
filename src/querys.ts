import { gql } from '@apollo/client';

export const GET_VIDEO = gql`
  query getVideo($id: ID!) {
    video(id: $id) {
      id
      url
      thumbnail
      format
      duration
      type
      fictitiousProgress
      color
      colorSmartPlayers
      playAndPause
      progressBar
      timeTraveled
      videoDuration
      volumeButton
      volumeBar
      speed
      fullscreen
      smartAutoPlay
      UrlCoverSmartAutoPlay
      TextTopSmartAutoPlay
      TextButtonSmartAutoPlay
      continueWatching
      watchingNow
      watchingNowFontSize
      watchingNowBgColor
      watchingNowTextColor
      ImageVideoPause
      UrlCoverImageVideoPause
      ImageOfFinished
      chapterMenu
      buttonsActive
      UrlCoverImageOfFinished
      fictitiousProgressHeight
      VideoButtons {
        id
        buttonType
        buttonText
        buttonSize
        buttonLink
        startTime
        endTime
        buttonAfterTheVideoEnds
        backgroundColor
        textColor
        hoverBackgroundColor
        hoverTextColor
        buttonPosition
      }
      Chapter {
        id
        title
        startTime
        endTime
      }
    }
  }
`;

export const ADD_VIEW_UNIQUE = gql`
  mutation AddViewUnique(
    $videoId: ID!
    $userIp: String!
    $deviceType: String!
    $agent: String!
    $country: String!
    $region: String!
    $city: String!
  ) {
    addViewUnique(
      videoId: $videoId
      userIp: $userIp
      deviceType: $deviceType
      agent: $agent
      country: $country
      region: $region
      city: $city
    )
  }
`;

export const ADD_VIEW_TIMESTAMP = gql`
  mutation AddViewTimestamp(
    $videoId: ID!
    $userIp: String!
    $startTimestamp: Float!
    $endTimestamp: Float!
    $deviceType: String!
    $agent: String!
    $country: String!
    $region: String!
    $city: String!
  ) {
    addViewTimestamp(
      videoId: $videoId
      userIp: $userIp
      startTimestamp: $startTimestamp
      endTimestamp: $endTimestamp
      deviceType: $deviceType
      agent: $agent
      country: $country
      region: $region
      city: $city
    )
  }
`;

export const CREATE_LEAD_FORM = gql`
  mutation AddLeadInForm(
    $formId: String!
    $videoId: String!
    $name: String
    $phone: String
    $email: String
  ) {
    addLeadInForm(
      formId: $formId
      videoId: $videoId
      data: {
        name: $name
        phone: $phone
        email: $email
      }
    )
  }
`;
