import  axios from "axios";

const baseUrl = 'http://localhost:8001/ml';
console.log(baseUrl)



const axiosInstance =axios.create({
    baseURL:baseUrl,
})


export default axiosInstance;