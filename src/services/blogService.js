import { apiClient } from './apiClient';
import { API_CONFIG } from './config';

/**
 * Fetches blog data.
 */
export const getBlogs = async (slug = '') => {
    const endpoint = slug
        ? `${API_CONFIG.ENDPOINTS.BLOGS}?slug=${slug}`
        : API_CONFIG.ENDPOINTS.BLOGS;
    return await apiClient.get(endpoint);
};

/**
 * Fetches case study data.
 */
export const getCaseStudies = async (slug = '') => {
    const endpoint = slug
        ? `${API_CONFIG.ENDPOINTS.CASE_STUDIES}?slug=${slug}`
        : API_CONFIG.ENDPOINTS.CASE_STUDIES;
    return await apiClient.get(endpoint);
};
