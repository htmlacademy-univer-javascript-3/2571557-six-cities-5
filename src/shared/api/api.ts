import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { getToken } from './token';

export type ErrorMessageType = {
  type: string;
  message: string;
}

const BAD_STATUS_CODES_ARRAY: string[] = [
  StatusCodes.BAD_REQUEST.toString(),
  StatusCodes.UNAUTHORIZED.toString(),
  StatusCodes.BAD_GATEWAY.toString(),
  StatusCodes.INTERNAL_SERVER_ERROR.toString(),
  'ERR_NETWORK',
  'ERR_BAD_REQUEST',
  'ECONNABORTED'
];

export const API_URL = 'https://14.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;

export const api = axios.create({
  timeout: REQUEST_TIMEOUT,
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig):InternalAxiosRequestConfig => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  },
);

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorMessageType>) => {
    if (error.code && BAD_STATUS_CODES_ARRAY.includes(error.code)) {
      toast.warn('ERRORS WITH SERVER',{position:'top-left', autoClose: 3000});
    }

    throw error;
  }
);

export enum ApiRoutes {
  LOGIN = '/login',
  LOGOUT = '/logout',
  OFFERS = '/offers',
  GET_REVIEWS = '/comments',
  GET_FAVORITES = '/favorite'
}
