// utils/imageService.js
import fetchClient from "../libs/fetchClient";

export const fetchStationImages = async (station_id, page = 1, limit = 10) => {
    const url = `${process.env.MICROSERVICE_URL}/stations/${station_id}/images`;
    const params = new URLSearchParams({ page, limit });
    return await fetchClient(`${url}?${params}`);
};

export const addStationImage = async (station_id, imageData, authToken) => {
    const url = `${process.env.MICROSERVICE_URL}/stations/${station_id}/images`;
    return await fetchClient(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(imageData)
    });
};

export const updateStationImage = async (station_id, image_id, imageData, authToken) => {
    const url = `${process.env.MICROSERVICE_URL}/stations/${station_id}/images/${image_id}`;
    return await fetchClient(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(imageData)
    });
};

export const deleteStationImage = async (station_id, image_id, authToken) => {
    const url = `${process.env.MICROSERVICE_URL}/stations/${station_id}/images/${image_id}`;
    return await fetchClient(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    });
};
