import { api } from "./api";
import { ENDPOINTS } from "../constants/endpoints";

export const plantacaoService = {
  async listar() {
    const response = await api.get(
      ENDPOINTS.PLANTACOES
    );

    return response.data;
  },

  async criar(data: any) {
    const response = await api.post(
      ENDPOINTS.PLANTACOES,
      data
    );

    return response.data;
  },
};