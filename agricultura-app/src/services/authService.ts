import { api } from "./api";
import { ENDPOINTS } from "../constants/endpoints";
import { LoginResponse } from "../types/LoginResponse";

export const authService = {
  async login(email: string, senha: string) {
    const response = await api.post<LoginResponse>(
      ENDPOINTS.LOGIN,
      {
        email,
        senha,
      }
    );

    return response.data;
  },
};