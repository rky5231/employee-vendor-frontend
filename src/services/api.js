import axios from 'axios';
 
const axiosInstance = axios.create({
baseURL: 'http://localhost:8080/api',
    auth: {
        username: 'admin', // Use the appropriate username here
        password: 'password' // Use the appropriate password here
    }
});
 
export default axiosInstance;