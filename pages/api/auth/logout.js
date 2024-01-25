import fetchClient from "../../../libs/fetchClient";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Validate the session token here if necessary

        const url = `${process.env.AUTH_SERVICE_URL}/logout`; 
        const options = { method: 'POST' };
        await fetchClient(url, options);

        // Clear the refresh token cookie with additional security flags
        res.setHeader('Set-Cookie', 'refreshToken=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict');
        return res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}