import axios from 'axios'

// 基准地址用于拼接
const api  = axios.create({
    baseURL:'http://127.0.0.1:4523/mock/1330443'
})

// 响应拦截
api.interceptors.response.use(res=>{

    return res.data; // 只返回 res.data
})
// 请求拦截

export default api;
