import { apiClient } from '../apiClient';
import { API_CONFIG } from '../config';

export const getAboutData = async () => {
    return await apiClient.get(`${API_CONFIG.ENDPOINTS.PAGE_DATA}?name=about`);
};
