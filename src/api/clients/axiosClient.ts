/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import qs from "query-string";

const requestSuccessHandler = (config: AxiosRequestConfig<any>) => {
  return config;
};

const requestErrorHandler = (err: any) => {
  return Promise.reject(err);
};

const responseSuccessHandler = (res: AxiosResponse<any, any>) => {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  } else {
    return responseErrorHandler(res);
  }
};

const responseErrorHandler = (err: any) => {
  return Promise.reject(err);
};

const client = axios.create({
  timeout: 15000,
  baseURL: "https://api.coingecko.com/api/v3" /* env.API_ROUTE */,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: "comma" }),
  },
});

client.interceptors.request.use(
  (config) => requestSuccessHandler(config),
  (err) => requestErrorHandler(err)
);

client.interceptors.response.use(
  (res) => responseSuccessHandler(res),
  (err) => responseErrorHandler(err)
);

export type Client<
  param,
  result,
  requestBody = object,
  queryString = object
> = (input: param & requestBody & queryString) => Promise<result>;

export { client };
