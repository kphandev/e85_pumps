// pages/api/stations/[station_id]/details.js
import fetchClient from "../../../libs/fetchClient";
import { fetchStationImages } from '../../../utils/imageService';
import { fetchStationComments } from '../../../utils/commentService';

const fetchStationDetails = async (station_id) => {
    try {
        const url = `${process.env.MICROSERVICE_URL}/stations/${station_id}/details`;
        return await fetchClient(url);
    } catch (error) {
        console.error("Failed to fetch station details:", error);
        throw error;
    }
};

export default async function handler(req, res) {
    const { station_id } = req.query;

    if (req.method === 'GET') {
        try {
            const [details, initialImages, initialComments] = await Promise.all([
                fetchStationDetails(station_id),
                fetchStationImages(station_id), // Fetches initial set of images
                fetchStationComments(station_id), // Fetches initial set of comments
            ]);

            return res.status(200).json({
                details,
                images: initialImages,
                comments: initialComments,
            });
        } catch (error) {
            return res.status(500).json({ message: error.message || 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
};
