import axios from 'axios';

const api = axios.create({
    baseURL: '/api/proxy',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 && window.location.pathname !== '/auth/login') {
            window.location.href = '/auth/login';
        }
        return Promise.reject(error);
    }
);

export default api;
