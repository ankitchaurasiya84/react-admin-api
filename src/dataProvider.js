import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:5008/auth'; // Base URL of your API
const httpClient = fetchUtils.fetchJson;

export const dataProvider = {
    getList: (resource, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        const { q } = params.filter; // Assuming 'q' is the filter term for search

        // Build the query string
        const query = {
            q: q || '', // If q is undefined, pass an empty string
        };

        const url = `${apiUrl}/getlogin?${fetchUtils.queryParameters(query)}`;

        return httpClient(url).then(({ json }) => ({
            data: json.map(record => ({ id: record._id, ...record })),
            total: json.length, // Modify this if your backend supports returning total count
        }));
    },

    // Add other methods if needed (e.g., getMany, update, create, delete)
    // For now, let's keep it simple and focus on getList
};
