/* eslint-disable no-prototype-builtins */
import axios from 'axios'
import JSEncrypt from 'jsencrypt'
import store from 'store'
import REQUEST_MAP from './config/httpConfig'
import Cookies from 'js-cookie'
import $store from '@/store'
// import Message from './message'

const BASEURL = 'http://localhost:4000/'  //设置域名
const pubKeyName = 'ua_publicKay'
const tokenName = "ua_jot"


async function encrypt(value) {
  let key = store.get(pubKeyName)
  try {
    if (!key || key === 'undefined') {
      //获取public Key
      let result = await instance.get('/keys')
      key = result.pubKey
      key = key.replace(/\. +/g, '')
      key = key.replace(/[\r\n]/g, '')
      store.set(pubKeyName, key)
    }
    let encrypt = new JSEncrypt()
    encrypt.setPublicKey(key)
    return encrypt.encrypt(value)
  } catch (err) {
    console.log(err)
  }
}



/*axios 默认值*/
axios.defaults.baseURL = BASEURL
let instance = axios.create()
//request 拦截器
instance.interceptors.request.use(async (config) => {
  let token = store.get(tokenName)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error);
});

//response 拦截器
instance.interceptors.response.use((response) => {
  //剥离最外层
  let result = response.data
  return result;
}, (error) => {
  return Promise.reject(error);
});


export default async function Http({ type, data }) {
  if (!(type in REQUEST_MAP)) {
    throw new Error('API请求错误')
  }
  let { url, method, noMessage = false, rsaKey = false, rest = false, setToken = false } = REQUEST_MAP[type]
  try {
    data = { ...data, sn: '858bf13be8d28e880b3f352f8bd4c5f2', os: 'pc', device_name: '我的设备', model: 'Chrome/90.0.4430.91', version_code: '1021002', version_name: '1021002' }
    method = method.toLowerCase()
    if (rest) {
      let restSymbol = url.match(/:(.*)$/)[1]
      url = url.replace(/:(.*)$/, data[restSymbol])
    }
    if (rsaKey && data[rsaKey]) {
      data[rsaKey] = await encrypt(data[rsaKey])
    }
    data = method === 'get' ? { params: data } : data
    let result = await instance[method](url, data)
    if (setToken) {
      let token = result.data.as_user_token;
      // let userInfo
      //如果是登录，需要记录下登录后返回的用户信息,重置cookie
      if (type == 'emailLogin' || type == 'phoneLogin') {
        Cookies.set('userInfo', JSON.stringify(result.data))
        // createCookie(
        //   'userInfo',
        //   encodeURI(JSON.stringify(result.data), 'utf-8')
        // )

        Http({
          type: 'usersAccount',
          data: {
            user_token: result.data.as_user_token,
          },
        }).then(
          (res) => {
            let userInfo = {
              ...result.data,
              ...res.data,
            }
            $store.commit('person/login', userInfo)
          },
          (err) => {
            alert(err.msg)
          }
        )
      }
      Cookies.set('as_user_token', token)
    }
    return result
  } catch (error) {
    if (error.response) {
      let message = error.response.msg
      if (!noMessage) {
        //new Message(message).danger()
        alert(message)
      }
    }
    return Promise.reject(error);
  }
}
