import axios from 'axios';
import { API_BASE_URL } from '../constants/links';

export interface Pessoa {
  id: number;
  nome: string;
  dataNascimento: string;
  uf: string;
  cidade: string;
}

const handleApiError = (error: any) => {
  console.error('Erro na API:', error.message);
  if (error.response) {
    console.error('Status:', error.response.status);
    console.error('Dados:', error.response.data);
  } else {
    console.error('Erro:', error);
  }
};

// Função para buscar uma pessoa pelo ID
export const fetchPessoaById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pessoa/${id}`);
    if (response.status !== 200) {
      throw new Error(`Erro ao buscar pessoa: ${response.status}`);
    }
    return response.data;
  } catch (error: any) {
    handleApiError(error);
    return null;
  }
};

// Função para buscar todas as pessoas
export const fetchPessoas = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pessoa`);
    if (response.status !== 200) {
      throw new Error(`Erro ao buscar pessoas: ${response.status}`);
    }
    return response.data;
  } catch (error: any) {
    handleApiError(error);
    return null;
  }
};

// Função para criar uma nova pessoa
export const createPessoa = async (data: Pessoa) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pessoa`, data);
    if (response.status !== 201) {
      throw new Error(`Erro ao criar pessoa: ${response.status}`);
    }
    return response.data;
  } catch (error: any) {
    handleApiError(error);
    return null;
  }
};

// Função para atualizar uma pessoa
export const updatePessoa = async (id: number, data: Pessoa) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/pessoa/${id}`, data);
    if (response.status !== 200) {
      throw new Error(`Erro ao atualizar pessoa: ${response.status}`);
    }
    return response.data;
  } catch (error: any) {
    handleApiError(error);
    return null;
  }
};

// Função para deletar uma pessoa pelo ID
export const deletePessoa = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/pessoa/${id}`);
    if (response.status !== 204) {
      throw new Error(`Erro ao deletar pessoa: ${response.status}`);
    }
  } catch (error: any) {
    handleApiError(error);
  }
};
