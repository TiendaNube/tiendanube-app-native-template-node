import axios from "axios";
import { HttpErrorException } from "@utils";

export const tiendanubeAuthClient = axios.create({
  baseURL: process.env.TIENDANUBE_AUTENTICATION_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

tiendanubeAuthClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error

    if (error.isAxiosError) {
      const { data } = error.response;
      const payload = new HttpErrorException(
        "TiendanubeAuthClient - " + data?.message,
        data?.description
      );
      payload.setStatusCode(data?.code);
      return Promise.reject(payload);
    }

    return Promise.reject(error);
  }
);

tiendanubeAuthClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data || {};
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.isAxiosError) {
      const { data } = error.response;
      const payload = new HttpErrorException(
        "TiendanubeAuthClient - " + data?.message,
        data?.description
      );
      payload.setStatusCode(data?.code);
      return Promise.reject(payload);
    }

    return Promise.reject(error);
  }
);
