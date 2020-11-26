import { axios } from '@/utils/request'

export function userCheck (params) {
    return axios({
        url: '/user/check',
        method: 'post',
        data: params
    })
}

export function userUpload (params) {
    return axios({
        url: '/user/upload',
        method: 'post',
        data: params
    })
}
export function login (params) {
  return axios({
    url: '/auth/login',
    method: 'post',
    data: params
  })
}

export function changePassword (params) {
  return axios({
    url: '/change_password',
    method: 'put',
    data: params
  })
}

export function getUser (params) {
  return axios({
    url: '/users',
    method: 'get',
    params: params
  })
}

export function recharge (params) {
  return axios({
    url: '/recharge',
    method: 'post',
    data: params
  })
}

export function getOrderList (params) {
  return axios({
    url: '/branch_orders',
    method: 'get',
    params: params
  })
}

export function handleOrders (id,params) {
  return axios({
    url: '/orders/' + id + '/check',
    method: 'put',
    data: params
  })
}

export function bannerList () {
    return axios({
        url: '/banner/list',
        method: 'get'
    })
}
export function noticeList () {
    return axios({
        url: '/notice/list',
        method: 'get'
    })
}
export function newsList (params) {
    return axios({
        url: '/news/list',
        method: 'get',
        params: params
    })
}
export function gemList () {
    return axios({
        url: '/venue/list',
        method: 'get'
    })
}
export function kindNewsList () {
    return axios({
        url: '/news/channelList',
        method: 'get'
    })
}
export function newsDetail (params) {
    return axios({
        url: '/news/detail',
        method: 'get',
        params: params
    })
}
export function activityList () {
    return axios({
        url: '/activity/list',
        method: 'get'
    })
}
export function activityDetail (params) {
    return axios({
        url: '/activity/detail',
        method: 'get',
        params: params
    })
}
export function gemDetail (params) {
    return axios({
        url: 'venue/detail',
        method: 'get',
        params: params
    })
}
export function userLogin (params) {
    return axios({
        url: '/front/loginByCode',
        method: 'get',
        params: params
    })
}
export function userRegister (params) {
    return axios({
        url: '/front/register',
        method: 'get',
        params: params
    })
}
export function getUserInfo () {
    return axios({
        url: '/front/getUserByOpenId',
        method: 'get'
    })
}
export function userSignList () {
    return axios({
        url: '/user/signList',
        method: 'get'
    })
}
export function userSign () {
    return axios({
        url: '/user/sign',
        method: 'get'
    })
}
export function scoreInfo () {
    return axios({
        url: '/user/pointsList',
        method: 'get'
    })
}
export function subGemList (params) {
    return axios({
        url: '/venue/subList',
        method: 'get',
        params: params
    })
}
export function subGemPrice (params) {
    return axios({
        url: '/venue/timeList',
        method: 'get',
        params: params
    })
}
export function creatOrder (params) {
    return axios({
        url: '/order/createOrder',
        method: 'post',
        params: params
    })
}
export function getOrder () {
    return axios({
        url: '/order/list',
        method: 'get'
    })
}

export function cancelOrder (params) {
    return axios({
        url: '/order/cancel',
        method: 'get',
        params: params
    })
}
export function getYouhui (params) {
    return axios({
        url: '/coupon/list',
        method: 'get',
        params: params
    })
}
export function getWxConfig (params) {
    return axios({
        url: '/wx/getJsapiTicket',
        method: 'get',
        params: params
    })
}
export function orderPay (params) {
    return axios({
        url: '/order/pay',
        method: 'post',
        params: params
    })
}
export function healthKind () {
    return axios({
        url: '/health/channelList',
        method: 'get'
    })
}
export function healthList (params) {
    return axios({
        url: '/health/list',
        method: 'get',
        params:params
    })
}
export function healthDetail (params) {
    return axios({
        url: '/health/detail',
        method: 'get',
        params:params
    })
}
export function editUserInfo (params) {
    return axios({
        url: '/front/changeUserByOpenId',
        method: 'post',
        params:params
    })
}
