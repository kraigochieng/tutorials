import axios from 'axios'

const server = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    }
})

export { server }