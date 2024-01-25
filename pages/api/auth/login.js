// pages/api/auth/login.js
import fetchClient from "../../../libs/fetchClient";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Extract login credentials from request body
        const { username, password } = req.body;

        // Basic validation
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Prepare the URL and options for the fetchClient call
        const url = `${process.env.AUTH_SERVICE_URL}/login`; // Using environment variable for the URL
        const options = {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        };

        // Use fetchClient to interact with the auth service
        const data = await fetchClient(url, options);
        const { accessToken, refreshToken } = data;
        res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; HttpOnly; Path=/; Secure; SameSite=Strict`);

        // Send the access token and any other necessary data back to the client
        return res.status(200).json({ accessToken, /* other user data */ });
    } catch (error) {
        // Handle errors
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}
