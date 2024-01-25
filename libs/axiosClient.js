import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosClient = axios.create();

// client-side API calls to server-side endpoints w/ retry
axiosRetry(axiosClient, {
  retries: 5,
  retryDelay: (retryCount) => {
    return Math.pow(2, retryCount) * 1000; // Exponential backoff starting at 1 second
  },
  retryCondition: (error) => {
    return error.code === 'ECONNABORTED' || /5\d\d/.test(error.response?.status);
  },
});

export default axiosClient;

// Example Use:
// import axiosClient from './axiosClient';

// axiosClient.get('https://example.com/data')
//   .then(response => {
//     // Handle response
//   })
//   .catch(error => {
//     // Handle error after all retries are over
//     // You can trigger UI changes here to show a retry button to the user
//   });