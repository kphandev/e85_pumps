// pages/api/auth/register.js
import fetchClient from "../../../libs/fetchClient";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Extract user registration details from request body
        const { username, email, password } = req.body;

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required' });
        }

        // Prepare the URL and options for the fetchClient call
        const url = `${process.env.AUTH_SERVICE_URL}/register`;
        const options = {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
        };

        // Use fetchClient to interact with the auth service
        const data = await fetchClient(url, options);

        // If your registration process includes auto-login (issuing tokens immediately)
        const { accessToken, refreshToken } = data;

        // Set the refresh token in an HttpOnly cookie
        res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; HttpOnly; Path=/; Secure; SameSite=Strict`);

        // Send a successful response back to the client with the access token
        return res.status(200).json({ accessToken, /* other user data */ });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}
