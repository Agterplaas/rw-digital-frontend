import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_ENDPOINT,
  headers: {
    Accept: "application/json",
  },
});

export default api;
