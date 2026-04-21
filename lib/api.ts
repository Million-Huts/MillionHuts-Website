import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

/*
=====================================================
BASE CONFIG
=====================================================
*/

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BACKUP_API_URL = process.env.NEXT_PUBLIC_BACKUP_API_URL;

if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

if (!BACKUP_API_URL) {
    console.warn("⚠️ BACKUP API URL is not defined");
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
REQUEST INTERCEPTOR
=====================================================
*/

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig & { _retry?: boolean }) => {
        // Track retry state
        if (config._retry === undefined) {
            config._retry = false;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

/*
=====================================================
RESPONSE INTERCEPTOR WITH FAILOVER
=====================================================
*/

api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
            _retry?: boolean;
        };

        const status = error.response?.status;

        const isServerError = status && status >= 500;
        const isNetworkError = !error.response;

        // Only retry once + only if backup exists
        if (
            BACKUP_API_URL &&
            originalRequest &&
            !originalRequest._retry &&
            (isServerError || isNetworkError)
        ) {
            console.warn("⚠️ Switching to BACKUP API...");

            originalRequest._retry = true;

            // Switch base URL
            originalRequest.baseURL = BACKUP_API_URL;

            try {
                return api(originalRequest);
            } catch (retryError) {
                return Promise.reject(retryError);
            }
        }

        console.error("API Error:", error?.response?.data || error.message);
        return Promise.reject(error);
    }
);