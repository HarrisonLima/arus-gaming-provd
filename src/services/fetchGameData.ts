// services/fetchGameData.ts
import axios from 'axios';

interface Categoria {
  id: number;
  categoria: string;
  categoria_id: number;
  ordem: number;
  desativado: boolean;
  block_bonus: boolean;
  sub_categorias: null;
  modalidades: number[];
}

interface GameData {
  categorias: Categoria[];
}

const API_URL = 'https://linkbet360.com/apipos/init-portal?domain=linkbet360.com';

export const fetchGameData = async (): Promise<GameData> => {
  try {
    const response = await axios.get<GameData>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};