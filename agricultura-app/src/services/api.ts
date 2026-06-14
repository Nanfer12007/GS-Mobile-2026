import axios from "axios";
import { storage } from "../utils/storage";

export const api = axios.create({
  baseURL: "http://192.168.15.21:8081",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {

    if (
      config.url?.includes("/auth/login")
    ) {
      return config;
    }

    const token =
      await storage.getToken();

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);