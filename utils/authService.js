import fetchClient from "../libs/fetchClient";

const validateToken = async (token) => {
    try {
        const url = `${process.env.AUTH_MICROSERVICE_URL}/validateToken`;
        const response = await fetchClient(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.isValid;
    } catch (error) {
        console.error("Token validation error:", error);
        return false;
    }
};

export const authMiddleware = async (req, res, next) => {
    if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
        const token = req.cookies.authToken;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const isValidToken = await validateToken(token);
        if (!isValidToken) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
    }

    next();
};
