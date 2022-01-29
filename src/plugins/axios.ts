import axios from 'axios';

const client = axios.create({
  baseURL: process.env.VUE_APP_JEEDOM_BASE_URL,
  params: {
    apikey: process.env.VUE_APP_JEEDOM_API_KEY,
  },
});

export default client;
