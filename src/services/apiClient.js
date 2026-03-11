import { API_CONFIG } from './config';

export const apiClient = {
    get: async (endpoint) => {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('API Client Error:', error);
            throw error;
        }
    },

    // Optional: Add post/put/delete if needed in the future
};
