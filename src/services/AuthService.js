import { httpDelete, httpPost } from '../utils/http';

const defaultParams = { success: () => {}, pending: () => {}, error: () => {} };

export async function login(body, params) {
  const { success, pending, error } = { ...defaultParams, ...params };
  try {
    pending();
    const { data } = await httpPost('/auth/login', body);
    localStorage.setItem('token', data.token);
    window.open('/dashboard', '_self');
    success();
  } catch (err) {
    error(err);
  }
}

export async function logout(params) {
  const { success, pending, error } = { ...defaultParams, ...params };
  try {
    pending();
    await httpDelete('/auth/logout');
    localStorage.clear();
    window.open('/login', '_self');
    success();
  } catch (err) {
    error(err);
  }
}
