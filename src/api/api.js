import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:7030/api/',
    timeout: 1000,
    headers: {"Access-Control-Allow-Origin": "*"}
});

export default api