// pages/api/auth/change-password.js
import fetchClient from "../../../libs/fetchClient";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { resetToken, newPassword } = req.body;
        if (!resetToken || !newPassword) {
            return res.status(400).json({ message: 'Reset token and new password are required' });
        }

        const url = `${process.env.AUTH_SERVICE_URL}/change-password`;
        const options = {
            method: 'POST',
            body: JSON.stringify({ resetToken, newPassword }),
        };

        // Call to auth service to change the password
        await fetchClient(url, options);

        // Respond to the client
        return res.status(200).json({ message: 'Password has been successfully changed.' });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}
