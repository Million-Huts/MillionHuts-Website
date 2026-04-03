import axios from "axios";

/*
=====================================================
BASE CONFIG
=====================================================
*/

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

/*
=====================================================
AXIOS INSTANCE
=====================================================
*/

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

/*
=====================================================
INTERCEPTORS (OPTIONAL BUT GOOD)
=====================================================
*/

// Request
api.interceptors.request.use(
    (config) => {
        // You can log or modify here
        return config;
    },
    (error) => Promise.reject(error)
);

// Response
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Global error handling
        console.error("API Error:", error?.response?.data || error.message);
        return Promise.reject(error);
    }
);