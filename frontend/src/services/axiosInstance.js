import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1/url", // Backend base URL
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;