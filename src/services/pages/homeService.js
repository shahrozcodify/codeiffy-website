import { apiClient } from '../apiClient';
import { API_CONFIG } from '../config';

/**
 * Fetches dynamic data for the Home page.
 * @returns {Promise<Object>} Page data from API
 */
export const getHomeData = async () => {
    return await apiClient.get(`${API_CONFIG.ENDPOINTS.PAGE_DATA}?name=home`);
};
