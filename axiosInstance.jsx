import axios from "axios";



const axiosInstance = axios.create({
     // baseURL: 'https://own-websit-backend.vercel.app/',
     baseURL: 'http://localhost:3000/',
})

export default axiosInstance;