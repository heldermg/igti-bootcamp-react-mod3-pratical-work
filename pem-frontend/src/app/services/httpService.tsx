import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const axiosInstance = axios.create({
  timeout: 5000,
  baseURL: BASE_URL,
})

export async function getAllData(url: string) {
  const { data } = await axiosInstance.get(url)
  return data
}