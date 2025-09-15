import axios from "axios";

const app = axios.create({
  // /////////////////////////////for corse error
  baseURL: "/api",
  //////////////////////////////////////////////
  //   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (req) => req,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error.config;
    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`/api/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return app(originalConfig);
      } catch (error) {
        Promise.reject(error);
      }
    }
    Promise.reject(error);
  }
);

const http = {
  get: app.get,
  patch: app.patch,
  put: app.put,
  delete: app.delete,
  post: app.post,
};

export default http;
