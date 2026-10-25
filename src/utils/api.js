const defaultApiBaseUrl = import.meta.env.DEV
  ? 'http://localhost:5000'
  : 'https://greenconnect-zooa.onrender.com'

export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl
).replace(/\/+$/, '')

export function apiUrl(path) {
  return `${API_BASE_URL}/${path.replace(/^\/+/, '')}`
}
