import axios from 'axios'

export const HOST = 'http://localhost:3001'

const api = axios.create({
    baseURL: HOST,
})

export default api 