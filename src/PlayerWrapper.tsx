import { GET_VIDEO } from './querys';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { Player } from './player';

export function PlayerWrapper() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get("videoId");

  const { loading, error, data } = useQuery(GET_VIDEO, { variables: { id: videoId } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading video</div>;
  if (!data?.video) return <div>Video not found</div>;

  return <Player video={data.video} />;
}
