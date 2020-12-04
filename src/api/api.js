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



