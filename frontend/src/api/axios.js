import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://backend-coral-two-89.vercel.app",
  withCredentials: true,
});

export default api;
