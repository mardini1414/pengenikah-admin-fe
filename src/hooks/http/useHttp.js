import useSWR from 'swr';
import http from '../../lib/axios';
import config from '../../config';

const { apiUrl } = config;

async function fetcher(url) {
  return http.get(url).then(data => data.data);
}

export function useGet(url) {
  return useSWR(apiUrl + url, fetcher);
}

export function usePost(url, body) {
  return http.post(apiUrl + url, body);
}

export function usePut(url, body) {
  return http.put(apiUrl + url, body);
}

export function useDelete(url) {
  return http.put(apiUrl + url);
}
