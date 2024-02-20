import useSWR from 'swr';
import http from '../lib/axios';

const fetcher = url => http.get(url).then(res => res.data);

export function httpGet(url) {
  return useSWR(url, fetcher);
}

export function httpPost(url, body) {
  return http.post(url, body);
}

export function httpPut(url, body) {
  return http.put(url, body);
}

export function httpDelete(url) {
  return http.delete(url);
}
