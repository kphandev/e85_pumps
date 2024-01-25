import fetchClient from "../../../libs/fetchClient";

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { userId, name, email, phoneNumber } = req.body; // Include any other fields you need

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const url = `${process.env.AUTH_SERVICE_URL}/update-profile`;
        const options = {
            method: 'PUT',
            body: JSON.stringify({ userId, name, email, phoneNumber }),
        };

        // Call to auth service to update the user's profile
        await fetchClient(url, options);

        return res.status(200).json({ message: 'Profile updated successfully.' });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}