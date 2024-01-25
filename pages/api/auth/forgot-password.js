// pages/api/auth/forgot-password.js
import fetchClient from "../../../libs/fetchClient";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const url = `${process.env.AUTH_SERVICE_URL}/forgot-password`;
        const options = {
            method: 'POST',
            body: JSON.stringify({ email }),
        };

        // Call to auth service to initiate password reset process
        await fetchClient(url, options);

        // Send a generic response regardless of whether the email is in the system
        return res.status(200).json({ message: 'If an account with that email exists, we have sent a password reset link.' });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal Server Error' });
    }
}
