import fetchClient from "../libs/fetchClient";

export const fetchStationComments = async (station_id, page = 1, limit = 10) => {
    const url = `${process.env.MICROSERVICE_URL}/stations/${station_id}/comments`;
    const params = new URLSearchParams({ page, limit });
    return await fetchClient(`${url}?${params}`);
};

export const addStationComment = async (station_id, commentData, authToken) => {
    const url = `${process.env.MICROSERVICE_URL}/stations/${station_id}/comments`;
    return await fetchClient(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(commentData)
    });
};

export const updateStationComment = async (station_id, comment_id, commentData, authToken) => {
    const url = `${process.env.MICROSERVICE_URL}/stations/${station_id}/comments/${comment_id}`;
    return await fetchClient(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(commentData)
    });
};

export const deleteStationComment = async (station_id, comment_id, authToken) => {
    const url = `${process.env.MICROSERVICE_URL}/stations/${station_id}/comments/${comment_id}`;
    return await fetchClient(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    });
};
