// server-side API call wrapper that sends logs to logging service.

const logErrorToService = async (error, context) => {
    try {
        const logEndpoint = `${process.env.LOGGING_SERVICE_URL}/log`;
        const body = JSON.stringify({
            error: error.message,
            stack: error.stack,
            context, // Additional context like user ID, browser info, etc.
        });

        await fetch(logEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body,
        });
    } catch (logError) {
        console.error('Error logging to service:', logError);
    }
};

const fetchClient = async (url, options = {}) => {
    // Set or update headers
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    try {
        // Pre-request logic (like logging)
        console.log('Sending request to', url);

        // The fetch call no longer manually sets the 'Authorization' header
        const response = await fetch(url, { ...options, headers, credentials: 'include' });
        const data = await response.json();

        // Post-response processing
        if (!response.ok) {
            // Global error handling
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    } catch (error) {
        // Error handling logic
        console.error('Fetch API Error:', error);
        logErrorToService(error, { url });
        throw error;
    }
};

export default fetchClient;
