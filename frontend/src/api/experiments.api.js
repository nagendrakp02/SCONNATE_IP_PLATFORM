// import axios from './axios';

// export const experimentsAPI = {
//   getAllExperiments: async () => {
//     const response = await axios.get('/api/experiments');
//     return response.data;
//   },

//   getExperiment: async (id) => {
//     const response = await axios.get(`/api/experiments/${id}`);
//     return response.data;
//   }
// };

import axios from './axios';

export const experimentsAPI = {
  getAllExperiments: async () => {
    const response = await axios.get('/api/experiments');
    return response.data;
  },

  getExperiment: async (id) => {
    const response = await axios.get(`/api/experiments/${id}`);
    return response.data;
  }
};