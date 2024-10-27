// src/api/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7281/api'; // Ajuste o URL conforme necessário

export const fetchPessoas = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pessoas`); // Ajuste o endpoint
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    throw error;
  }
};

export const createPessoa = async (data: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pessoas`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pessoa:', error);
    throw error;
  }
};

export const updatePessoa = async (id: string, data: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/pessoas/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar pessoa:', error);
    throw error;
  }
};

export const deletePessoa = async (id: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/pessoas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar pessoa:', error);
    throw error;
  }
};
