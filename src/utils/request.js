import Vue from 'vue'
import axios from 'axios'
import { VueAxios } from './axios'
import _this from '../main.js'
import router from '../router.js'
import store from '@/store'

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // api base_url
  timeout: 6000 // 请求超时时间
})

const err = (error) => {
  if (error.response){
    if (error.response.status=== 401){
    }

  }
  return Promise.reject(error.response)
};

// request 拦截器
service.interceptors.request.use(config => {
  // const token = localStorage.getItem('token')
  const { openId } = store.getters
  if (openId) {
    config.headers[ 'openId' ] = openId // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)

// response 拦截器
service.interceptors.response.use((response) => {
    return response.data
  }, err)

const installer = {
  vm: {},
  install (Vue, router = {}) {
    Vue.use(VueAxios, router, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
