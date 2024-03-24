import axios, { AxiosError } from 'axios'
import { creds } from '../utils/constants'

function getAccessToken() {
  const accessToken = localStorage.getItem(creds.ACCESS_TOKEN)
  return accessToken ? accessToken : undefined
}

export const fetcher = async (endpoint, params, method, optHeader = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + getAccessToken(),
    ...optHeader
  }

  const isGet = ['GET', 'get'].includes(method)

  const requestConfig = {
    url: endpoint,
    method,
    headers,
    ...(isGet ? { params } : { data: params })
  }

  try {
    const response = await axios(requestConfig)

    if (response.data.status !== 'success') return Promise.reject(response.data)

    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data) return Promise.reject(error.response.data)
    }

    throw error
  }
}
