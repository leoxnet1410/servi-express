import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const ApiClient = {
  company: {
    create: async (data) => {
      const res = await axios.post(`${API_URL}/company`, data);
      return res.data;
    },
    all: async () => {
      const res = await axios.get(`${API_URL}/company`);
      return res.data;
    }
  }
};