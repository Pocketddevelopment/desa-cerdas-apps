import APIConstants from '@constants/api';
import axiosInstance, { AxiosError, AxiosResponse } from 'axios';
import type { Method, AxiosRequestConfig } from 'axios';
import { getQueryUrlParams } from '@utils/transformer';

const axios = axiosInstance.create({
  baseURL: APIConstants.STAGING,
});

const defaultHttpHeaders: Record<string, string> = {
  'Content-Type': 'application/json;charset=utf-8',
};

/**
 * Error handler
 */
const errorHandler = (error: { response: AxiosResponse }): Response => {
  const { response } = error;
  if (response && response.status) {
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

class NetworkRequest {
  accessToken: string;
  constructor(accessToken: string = '') {
    this.accessToken = accessToken;
  }

  public setAccessToken(token: string) {
    this.accessToken = token;
  }

  public clearAccessToken() {
    this.accessToken = '';
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
    return axios
      .request({
        url: url,
        method: method,
        headers: finalHttpHeaders,
        ...options,
      })
      .catch((err: AxiosError) => {
        return errorHandler(err as any);
      });
  }
}

const GlobalNetworking = new NetworkRequest();

export default GlobalNetworking;
