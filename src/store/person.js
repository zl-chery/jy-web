import Cookies from 'js-cookie'

// 登录注册模块
export default {
    namespaced: true,
    actions: {
        
    },
    mutations: {
        // 登录
        login(state, value) {
            state.userInfo = value
            state.isLogin = true
        },
        //退出登录
        logout(state) {
            state.userInfo = null
            state.isLogin = false
            Cookies.remove('as_user_token')
            Cookies.remove('userInfo')
        },
        addUserInfo(state, value) {
            state.userInfo = { ...value, ...state.userInfo }
        },
        modifyUser(state, value) {
            state.userInfo.nickname = value.nickname
            state.userInfo.sex = value.sex
            state.userInfo.birthday = value.birthday
        },
        headimgChange(state, value) {
            state.userInfo.headimg = value
        }
    },
    state: {
        userInfo: {},
        isLogin: false
    },
    getters: {

    }
}