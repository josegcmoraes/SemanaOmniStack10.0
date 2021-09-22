import axios from 'axios';

const api = axios.create({
    // usar o IP da sua máquina no emulador trocar por localhost
    baseURL: 'http://192.168.2.5:3333',
});

export default api;