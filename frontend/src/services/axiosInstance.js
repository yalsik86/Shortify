import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://shortify-backend-donb.onrender.com/api/v1/url", // Backend base URL
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;