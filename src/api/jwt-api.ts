import axios, { AxiosError } from "axios";
import { Cookies } from "react-cookie";

const jwtAxios = axios.create({
  baseURL: "https://jobseekerhub.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

jwtAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err instanceof AxiosError) {
      console.log("status res", err.response);
      if (err.response && err.response.status === 403) {
        console.log("logout user");
        delete jwtAxios.defaults.headers.common.Authorization;
        const cookies = new Cookies();
        cookies.remove("token", { path: "/" });
        localStorage.clear();
        window.location.href = "/"; //check landing page url
      }
      return Promise.reject(err);
    }
  }
);

export const setAuthToken = (token: string) => {
  jwtAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const cookies = new Cookies();
  cookies.set("token", token, { path: "/" });
};

export default jwtAxios;
