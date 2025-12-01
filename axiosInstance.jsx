import axios from "axios";



const axiosInstance = axios.create({
     baseURL: 'https://own-websit-backend.vercel.app/'
})

export default axiosInstance;