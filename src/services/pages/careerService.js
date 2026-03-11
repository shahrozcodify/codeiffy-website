import { apiClient } from '../apiClient';
import { API_CONFIG } from '../config';

export const getCareerData = async () => {
    return await apiClient.get(`${API_CONFIG.ENDPOINTS.PAGE_DATA}?name=career`);
};
