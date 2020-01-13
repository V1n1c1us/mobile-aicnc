import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api-aircnc.herokuapp.com',
})

export default api;