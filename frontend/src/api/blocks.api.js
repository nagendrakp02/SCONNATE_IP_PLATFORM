import axios from './axios';

export const blocksAPI = {
  getAllBlocks: async () => {
    const response = await axios.get('/api/blocks');
    return response.data;
  }
};