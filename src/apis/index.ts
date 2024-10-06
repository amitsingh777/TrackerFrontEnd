import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'http://localhost:8000/v1';

export default axiosInstance;
