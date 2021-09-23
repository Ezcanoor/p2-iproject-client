import axios from 'axios'
const baseURL = 'http://localhost:3000'
const serverAPI = axios.create({
  baseURL: baseURL
})

export default serverAPI 