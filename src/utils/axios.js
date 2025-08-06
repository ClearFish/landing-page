import axios from "axios";

const service = axios.create({
    baseURL:'',
	timeout: 10000, // 请求超时时间
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})

service.interceptors.request.use(
	config=>{
		return config
	},
	error => {
		console.log(error)
		console.log('这里是请求错误')
		return Promise.reject(error)
	}
)
//响应拦截器
service.interceptors.response.use(
	response => {
		const res = response.data;
		return res
	},
	err => {
		// 在响应错误的时候的逻辑处理
		console.log('这里是响应错误')
 
		return Promise.reject(err)
    }
)

export default service