import axios from "axios";


export const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:5000",
    withCredentials: true
});