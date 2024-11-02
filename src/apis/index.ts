import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'http://192.168.0.11:8000/v1';

export default axiosInstance;
