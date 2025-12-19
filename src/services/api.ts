import axios from "axios"

const api = axios.create({
  baseURL: "https://97a549589451.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
    
  }
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status

      if (status === 401 || status === 403) {
        localStorage.removeItem("token")

        window.location.href = "/"
      }
    }

    return Promise.reject(error)
  }
)

export default api
