import axios from 'axios';
const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originnalConfig = err.config;
    if (err.response.status === 401 && !originnalConfig._retry) {
      originnalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, { withCredentials: true, });
        if (data) {
          return app(originnalConfig);
        }
      }
      catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(err)
  }
);
const http = {
  put: app.put,
  get: app.get,
  post: app.post,
  delete: app.delete,
  patch: app.patch
}
export default http