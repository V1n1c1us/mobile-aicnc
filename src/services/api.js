import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-aircnc.herokuapp.com',
})

export default api;