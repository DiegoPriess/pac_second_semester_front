import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const get = async(url, setData) => { 
  const reposta = await api.get(url);
  setData(reposta.data);
}