import axios from './axios';

export const pipelinesAPI = {
  getUserPipelines: async () => {
    const response = await axios.get('/api/pipelines');
    return response.data;
  },

  getPipeline: async (id) => {
    const response = await axios.get(`/api/pipelines/${id}`);
    return response.data;
  },

  createPipeline: async (pipelineData) => {
    const response = await axios.post('/api/pipelines', pipelineData);
    return response.data;
  },

  updatePipeline: async (id, pipelineData) => {
    const response = await axios.put(`/api/pipelines/${id}`, pipelineData);
    return response.data;
  },

  deletePipeline: async (id) => {
    const response = await axios.delete(`/api/pipelines/${id}`);
    return response.data;
  }
};
