import { apiClient } from '../apiClient';
import { API_CONFIG } from '../config';

export const getContactData = async () => {
    return await apiClient.get(`${API_CONFIG.ENDPOINTS.PAGE_DATA}?name=contact-us`);
};
