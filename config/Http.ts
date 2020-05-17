import axios from 'axios'

export const API_KEY = 'HFk0WX4eOkbPYEM0Kx6MHwk0HMhb9MqvHExF89m2'


export const http = axios.create({
  baseURL: 'https://api.nasa.gov/neo/rest/v1/neo'
})