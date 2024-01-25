const fetchClient = async (url, options = {}) => {
    // Set or update headers
    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'), // Example for adding auth token
        'Content-Type': 'application/json',
        ...options.headers,
    };

    try {
        // Pre-request logic (like logging or header checks)
        console.log('Sending request to', url);

        const response = await fetch(url, { ...options, headers });
        const data = await response.json();

        // Post-response processing
        if (!response.ok) {
            // Global error handling
            throw new Error(data.message || 'Something went wrong');
        }

        return data; // Return the data from the response
    } catch (error) {
        // Error handling logic
        console.error('Fetch API Error:', error);
        // Additional error processing or re-throwing
        throw error;
    }
};

export default fetchClient;
