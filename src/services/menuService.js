import { apiClient } from './apiClient';
import { API_CONFIG } from './config';

/**
 * Fetches menu data for header and footer.
 */
export const getMenuData = async () => {
    return await apiClient.get(API_CONFIG.ENDPOINTS.MENU);
};
