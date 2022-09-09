import axios, { AxiosError, AxiosRequestConfig } from 'axios';

type ClientConfig = {
  endpoint: `https://${string}`;
}

type Keys<T> = keyof T & string;

type Params<T> = {
  [K in keyof T]?: T[K]
} & { max_results?: number, keyword?: string, dn_id?: number };

class ApiClient<TData> { 
  private endpoint: string;

  constructor(config: ClientConfig) {
    this.endpoint = config.endpoint;
  }

  private async request<T>(url: URL, config: AxiosRequestConfig) {
    try {
      const res = await axios({
        ...config,
        url: url.toString(),
      })
      return ["success", res.data as T] as const;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(`API_CLIENT_ERROR: ${error.message}`);
      }
      return ["failed", error as AxiosError] as const;
    }
  }

  find<R extends Keys<TData>>(resource: R, params?: Params<TData[R]>) {
    const search = new URLSearchParams()
    if (params) {
      for (let [key, value] of Object.entries(params)) {
        search.set(key, value as string);
      }
    }
    if (resource === 'joke/') {
      let value = parseInt(search.get("dn_id") as string)
      const url = new URL(`${resource}${value}`, this.endpoint)
      return this.request<TData[R]>(url, { method: 'GET' });
    }
    const url = new URL(`${resource}?${search}`, this.endpoint);
    console.log(url.toString());
    return this.request<TData[R][]>(url, { method: 'GET' });
  }
}

export { ApiClient };