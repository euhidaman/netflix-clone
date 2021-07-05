import axios from "axios";

// This base URL will be appended with URLs present in 'request.js'
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default instance;