import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + '/api', // ✅ like http://localhost:3004/api
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
