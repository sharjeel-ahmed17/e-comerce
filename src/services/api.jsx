// src/services/api.js
import axios from 'axios';

const API_URL = 'https://dummyjson.com';

const api = axios.create({
    baseURL: API_URL,
});

export const login = async (username, password) => {
    try {
        const response = await api.post('/auth/login', { username, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getCurrentUser = async (token) => {
    try {
        const response = await api.get('/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const refreshAuthToken = async (token) => {
    try {
        const response = await api.post('/auth/refresh', {}, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getProduct = async (id) => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const searchProducts = async (query) => {
    try {
        const response = await api.get(`/products/search?q=${query}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
