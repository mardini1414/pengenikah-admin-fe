import { httpGet } from '../utils/http';

const url = {
  allTodo: () => '/todos',
};

export function getTodo() {
  return httpGet(url.allTodo);
}
