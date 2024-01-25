import fetchClient from "../../../libs/fetchClient"; 

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Retrieve the refresh token from the request cookies
        const refreshToken = req.cookies.refreshToken; // Adjust based on your cookie key

        // Basic validation
        if (!refreshToken) {
            return res.status(400).json({ message: 'Refresh token is required' });
        }

        // Prepare the URL and options for the fetchClient call
        const url = `${process.env.AUTH_SERVICE_URL}/refresh`; 
        const options = {
            method: 'POST',
            body: JSON.stringify({ refreshToken }),
        };

        // Use fetchClient to interact with the auth service
        const data = await fetchClient(url, options);

        // Set the new access token (and refresh token if applicable) in HttpOnly cookies
        res.setHeader('Set-Cookie', [
            `accessToken=${data.accessToken}; HttpOnly`,
            `refreshToken=${data.refreshToken}; HttpOnly` // Include this line only if you're also issuing a new refresh token
        ]);

        // Respond with a success message
        return res.status(200).json({ message: 'Token refreshed successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}