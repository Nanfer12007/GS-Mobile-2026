import { api } from "./api";
import { ENDPOINTS } from "../constants/endpoints";

export const sateliteService = {
  async listar() {
    const response = await api.get(
      ENDPOINTS.DADOS_SATELITAIS
    );

    return response.data;
  },

  async criar(data: any) {
    const response = await api.post(
      ENDPOINTS.DADOS_SATELITAIS,
      data
    );

    return response.data;
  },

  async atualizar(id: number, data: any) {
    const response = await api.put(
      `${ENDPOINTS.DADOS_SATELITAIS}/${id}`,
      data
    );

    return response.data;
  },

  
async deletar(id: number) {
  await api.delete(
    `/dados-satelitais/${id}`
  );
},
};