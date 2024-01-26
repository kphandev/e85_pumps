import * as ImageService from '../../../utils/imageService';
import { authMiddleware } from '../../../utils/authService';

export default async function handler(req, res) {
    const { station_id } = req.query;

    if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
        await authMiddleware(req, res, async () => {
            processRequest(req, res, station_id);
        });
    } else {
        processRequest(req, res, station_id);
    }
};

async function processRequest(req, res, station_id) {
    try {
        switch (req.method) {
            case 'GET':
                await ImageService.fetchStationImages(req, res, station_id);
                break;
            case 'POST':
                await ImageService.addStationImage(req, res, station_id);
                break;
            case 'PUT':
                await ImageService.updateStationImage(req, res, station_id);
                break;
            case 'DELETE':
                await ImageService.deleteStationImage(req, res, station_id);
                break;
            default:
                res.status(405).json({ message: 'Method Not Allowed' });
                break;
        }
    } catch (error) {
        res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}

