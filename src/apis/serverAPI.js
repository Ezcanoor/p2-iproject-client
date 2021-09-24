import axios from 'axios'
const baseURL = 'https://cheats-chat.herokuapp.com'
const serverAPI = axios.create({
  baseURL: baseURL
})

export default serverAPI 