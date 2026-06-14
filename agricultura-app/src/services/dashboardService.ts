import { api } from "./api";
import { ENDPOINTS } from "../constants/endpoints";
import { Dashboard } from "../types/Dashboard";

export const dashboardService = {
  async getDashboard() {
  try {
    const response = await api.get(
      ENDPOINTS.DASHBOARD
    );

    return response.data;
  } catch (error: any) {
    console.log(
      "STATUS:",
      error?.response?.status
    );

    console.log(
      "DATA:",
      error?.response?.data
    );

    throw error;
  }
},
};