import { httpGet } from '../utils/http';

export function getSummaries() {
  const { data, isLoading, error } = httpGet('/summaries');
  return {
    totalInvitation: data?.data.total_invitation || 0,
    totalSong: data?.data.total_song || 0,
    totalTheme: data?.data.total_theme || 0,
    isLoading,
    error,
  };
}
