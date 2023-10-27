import axios from 'axios';
import { API_PATH } from '@/common';
import { handleErrors } from '@/common/utils/method.utils';
import { logout } from '@/redux/slices';
import { store } from '@/redux/store';
import { IOptionRequest } from '@/types/common-global.types';
import { ModalServices } from './modal-service';

const UNAUTHORIZED_CODE = 401;

const instance = axios.create({
  timeout: 16000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'cache-control': 'no-cache',
    Accept: '*/*',
  },
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = store.getState()?.auth?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
  { synchronous: true },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const err = handleErrors(error);
    if (error?.response?.data?.statusCode === UNAUTHORIZED_CODE) {
      const token = store.getState()?.auth?.accessToken;
      if (token) {
        store.dispatch(logout() as any);
        ModalServices.showMessageError({ message: 'Login session expired' });
      }
      err.message = 'Login session expired';
    }

    return Promise.reject(err);
  },
);

class NetworkServiceBase {
  async get(path: keyof typeof API_PATH, ops?: IOptionRequest) {
    const suffix = ops?.suffix || '';
    return instance.get(`${API_PATH[path]}${suffix}`, ops);
  }

  async post(path: keyof typeof API_PATH, data?: any, ops?: IOptionRequest) {
    const suffix = ops?.suffix || '';
    return instance.post(`${API_PATH[path]}${suffix}`, data, ops);
  }

  async put(path: keyof typeof API_PATH, data?: any, ops?: IOptionRequest) {
    const suffix = ops?.suffix || '';
    return instance.put(`${API_PATH[path]}${suffix}`, data, ops);
  }

  async patch(path: keyof typeof API_PATH, data?: any, ops?: IOptionRequest) {
    const suffix = ops?.suffix || '';
    return instance.patch(`${API_PATH[path]}${suffix}`, data, ops);
  }

  async delete(path: keyof typeof API_PATH, ops?: IOptionRequest) {
    const suffix = ops?.suffix || '';
    return instance.delete(`${API_PATH[path]}${suffix}`, ops);
  }

  async postFile(
    path: keyof typeof API_PATH,
    data?: FormData,
    ops?: IOptionRequest,
  ) {
    const suffix = ops?.suffix || '';
    return instance.post(`${API_PATH[path]}${suffix}`, data, {
      ...ops,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}

export const NetworkService = new NetworkServiceBase();
