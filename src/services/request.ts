import APIConstants from '@constants/api';
import axiosInstance, { AxiosError, AxiosResponse } from 'axios';
import type { Method, AxiosRequestConfig } from 'axios';
import { getQueryUrlParams } from '@utils/transformer';
import APIResponse from '@interfaces/APIResponse.interface';
import { store } from '@store/store';
import { refreshTokenThunk } from '@authentication/models/thunks';

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry: boolean;
  }
}

type LastRequestInterface = {
  url: string;
  method: Method;
  payload: Record<string, string>;
  options?: AxiosRequestConfig;
};

const axios = axiosInstance.create({
  baseURL: APIConstants.STAGING,
  _retry: false,
});

const defaultHttpHeaders: Record<string, string> = {
  'Content-Type': 'application/json;charset=utf-8',
};

// Response interceptor for API calls
axios.interceptors.response.use(
  async (response) => {
    const originalRequest = response.config;
    if (response.data.ResponseCode === '11' && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await store.dispatch(refreshTokenThunk());
      axios.defaults.headers.common.Authorization = 'Bearer ' + access_token;
      return axios(originalRequest);
    }
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await store.dispatch(refreshTokenThunk());
      axios.defaults.headers.common.Authorization = 'Bearer ' + access_token;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

/**
 * Error handler
 */
const errorHandler = (error: {
  response: AxiosResponse;
  errorData: any;
}): APIResponse & Record<string, string> => {
  const { response, errorData } = error;
  // handle ResponseCode from API
  if (errorData) {
    throw errorData.data;
  }
  // handle Error from axios
  else if (response && response.status) {
    const { status } = response;
    if (status === 401) {
      throw response.data;
    } else if (status === 403) {
      throw response.data;
    } else if (status >= 404 && status < 422) {
      throw response.data;
    } else if (status >= 400) {
      throw response.data;
    }
  }
  return response.data;
};

/**
 * Response Handler
 */
const responseHandler = (
  response: AxiosResponse
): APIResponse & Record<string, string> => {
  const { data }: { data: APIResponse & Record<string, string> } = response;
  process.env.NODE_ENV !== 'production' && console.log('Response', data);
  // Error occured
  if (data.ResponseCode === '99') {
    throw {
      errorData: response,
    };
  } else {
    return data;
  }
};

class NetworkRequest {
  accessToken: string;
  lastRequest: LastRequestInterface | null;
  constructor(accessToken: string = '', lastRequest = null) {
    this.accessToken = accessToken;
    this.lastRequest = lastRequest;
  }

  public setAccessToken(token: string) {
    this.accessToken = token;
  }

  public clearAccessToken() {
    this.accessToken = '';
  }

  private setLastRequest(requestOptions: LastRequestInterface) {
    this.lastRequest = requestOptions;
  }

  public requestWithLastRequest() {
    if (this.lastRequest) {
      switch (this.lastRequest.method) {
        case 'POST':
          this.post(
            this.lastRequest.url,
            this.lastRequest.payload,
            this.lastRequest.options
          );
          break;
        case 'GET':
          this.request(
            this.lastRequest.method,
            this.lastRequest.url,
            this.lastRequest.options || {}
          );
          break;
        case 'PUT':
          this.put(
            this.lastRequest.method,
            this.lastRequest.url,
            this.lastRequest.options
          );
        default:
          break;
      }
    }
  }

  public async post(url: string, body: any, options?: AxiosRequestConfig) {
    return this.request('POST', url, {
      ...options,
      data: body,
    });
  }

  public async get(
    url: string,
    params?: Record<string, any>,
    options?: AxiosRequestConfig
  ) {
    const queryParams = getQueryUrlParams(params);
    const finalUrl = `${url}${queryParams}`;
    return this.request('GET', finalUrl, {
      ...options,
    });
  }

  public async put(url: string, body: any, options?: AxiosRequestConfig) {
    return this.request('PUT', url, {
      ...options,
      data: body,
    });
  }

  public async request(
    method: Method,
    url: string,
    options: AxiosRequestConfig
  ) {
    let finalHttpHeaders = defaultHttpHeaders;
    if (this.accessToken) {
      finalHttpHeaders = {
        ...defaultHttpHeaders,
        Authorization: `Bearer ${this.accessToken}`,
      };
    }
    this.setLastRequest({
      method: method,
      url: url,
      payload: options.data,
      options: options,
    });
    process.env.NODE_ENV !== 'production' &&
      console.log('Making', method, 'request to', url);
    return axios
      .request({
        url: url,
        method: method,
        headers: finalHttpHeaders,
        ...options,
      })
      .then((response) => {
        return responseHandler(response);
      })
      .catch((err: AxiosError) => {
        return errorHandler(err as any);
      });
  }
}

const GlobalNetworking = new NetworkRequest();

export default GlobalNetworking;
