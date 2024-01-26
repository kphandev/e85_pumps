// pages/api/stations/[station_id]/comments.js
import * as CommentService from '../../../utils/commentService';
import { authMiddleware } from '../../../utils/authService';

export default async function handler(req, res) {
    const { station_id } = req.query;

    if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
        await authMiddleware(req, res, async () => {
            processCommentRequest(req, res, station_id);
        });
    } else {
        processCommentRequest(req, res, station_id);
    }
};

async function processCommentRequest(req, res, station_id) {
    try {
        switch (req.method) {
            case 'GET':
                await CommentService.fetchStationComments(req, res, station_id);
                break;
            case 'POST':
                await CommentService.addStationComment(req, res, station_id);
                break;
            case 'PUT':
                await CommentService.updateStationComment(req, res, station_id);
                break;
            case 'DELETE':
                await CommentService.deleteStationComment(req, res, station_id);
                break;
            default:
                res.status(405).json({ message: 'Method Not Allowed' });
                break;
        }
    } catch (error) {
        res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}
