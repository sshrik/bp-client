import axios, { AxiosResponse } from "axios";
import { env } from "config/env";

const instance = axios.create({
  baseURL: env.API_URL,
  timeout: 5000,
});

type HTTPMethod = 'GET' | 'PUT' | 'POST' | 'DELETE';

type HTTPHeaders = Record<string, string | string[]>;

type HTTPParams = Record<string, string | number | boolean | string[]>;

class API {
  static get<T = unknown>(url: string, params?: HTTPParams, headers?: HTTPHeaders): Promise<AxiosResponse<T>> {
    return instance.get(url, { params, headers });
  }

  static post<T = unknown>(url: string, data?: unknown, headers?: HTTPHeaders): Promise<AxiosResponse<T>> {
    return instance.post(url, data, { headers });
  }

  static put<T = unknown>(url: string, data?: unknown, headers?: HTTPHeaders): Promise<AxiosResponse<T>> {
    return instance.put(url, data, { headers });
  }

  static delete<T = unknown>(url: string, headers?: HTTPHeaders): Promise<AxiosResponse<T>> {
    return instance.delete(url, { headers });
  }

  static request<T = unknown>(method: HTTPMethod, url: string, data?: unknown, params?: HTTPParams, headers?: HTTPHeaders): Promise<AxiosResponse<T>> {
    return instance.request({ method, url, data, params, headers });
  }
}

export default API;