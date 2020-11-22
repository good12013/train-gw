import { userLogin, getUserInfo, userRegister } from '@/api/api'
import {
  saveLoginStatus,
  saveOpenId,
  saveUserInfo,
  removeUserInfo,
  removeLoginStatus,
  removeOpenId,
  loadLoginStatus,
  loadOpenId,
  loadUserInfo
} from '@/utils/cache'
import { getMoble } from '@/utils/index'
const state = {
  loginStatus: loadLoginStatus(), // 登录状态
  openId: loadOpenId(), // 用户openid
  userInfo: loadUserInfo() // 用户登录信息
}

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_OPENID: (state, openId) => {
    state.openId = openId
  },
  SET_LOGIN_STATUS: (state, loginStatus) => {
    state.loginStatus = loginStatus
  }
}

const actions = {
  // 登录相关，通过code获取token和用户信息，用户根据自己的需求对接后台
  async loginWechatAuth({commit}, code) {
    const data = {
      code: code
    }
    const res = await userLogin(data)
    if (res.code === 0) {
      commit('SET_OPENID', saveOpenId(res.data.openId))
      const res2 = await getUserInfo()
      if (res2.code === 400001) {
        const result = await userRegister( {telephone: getMoble()} )
        if (result.code !== 0) {
          commit('SET_LOGIN_STATUS', 1)
        } else {
          commit('SET_USERINFO', saveUserInfo(result.data))
        }
      } else {
        commit('SET_USERINFO', saveUserInfo(res2.data))
      }
    }
    return new Promise((resolve, reject) => {
      resolve(res)
      
      // userLogin(data)
      //   .then(res => {
      //     // 存用户信息，token
      //     commit('SET_USERINFO', saveUserInfo(res.data.user))
      //     commit('SET_TOKEN', saveToken(res.data.token))
      //     resolve(res)
      //   })
      //   .catch(error => {
      //     reject(error)
      //   })
    })
  },
  // 设置状态
  setLoginStatus({commit}, query) {
    if (query === 0 || query === 1) {
      // 上线打开注释，本地调试注释掉，保持信息最新
      removeOpenId()
      removeUserInfo()
      commit('SET_OPENID', null)
      commit('SET_USERINFO', null)
    }
    // 设置不同的登录状态
    commit('SET_LOGIN_STATUS', saveLoginStatus(query))
  },
  // 登出
  fedLogOut() {
    // 删除token，用户信息，登陆状态
    removeOpenId()
    removeUserInfo()
    removeLoginStatus()
  },
  async getUserByOpenId({commit}, openId) {
    const res = await getUserInfo(openId)
    if (res.code === 0) {
      commit('SET_USERINFO', saveUserInfo(res.data))
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
