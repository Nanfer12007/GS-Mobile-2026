import { api } from "./api";
import { ENDPOINTS } from "../constants/endpoints";

export const fazendaService = {
  async listar() {
    const response = await api.get(
      ENDPOINTS.FAZENDAS
    );

    return response.data;
  },

  async criar(data: any) {
    const response = await api.post(
      ENDPOINTS.FAZENDAS,
      data
    );

    return response.data;
  },
};