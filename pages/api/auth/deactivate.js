import fetchClient from "../../../libs/fetchClient";

export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { userId, confirmationToken } = req.body; // Use a confirmation token for added security

        if (!userId || !confirmationToken) {
            return res.status(400).json({ message: 'User ID and confirmation token are required' });
        }

        const url = `${process.env.AUTH_SERVICE_URL}/deactivate`;
        const options = {
            method: 'DELETE',
            body: JSON.stringify({ userId, confirmationToken }),
        };

        // Call to auth service to deactivate the user's account
        await fetchClient(url, options);

        // Optionally clear the user's session or tokens after account deactivation
        res.setHeader('Set-Cookie', 'refreshToken=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Strict');

        return res.status(200).json({ message: 'Account deactivated successfully.' });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}