import axios from 'axios';

const URL = process.env.REACT_APP_BACKEND;

export const API = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json'
    }
});