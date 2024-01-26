// pages/api/maps/stations.js
import fetchClient from "../../../libs/fetchClient";

export default async function handler(req, res) {
    try {
        let url = `${process.env.MAPS_SERVICE_URL}/markers`;

        const options = { method: 'GET' };
        const response = await fetchClient(url, options);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}
