import axios from 'axios'
import { Dialog } from 'vant'
const instance = axios.create({
  baseURL: '/api',
})

instance.interceptors.response.use((response) => {
  const { data: _data } = response
  const { msg, code, data } = _data
  if (code !== 0) {
    Dialog.alert({
      message: msg,
    }).then(() => {
      // 关闭弹窗
    })
    return Promise.reject(msg)
  }
  return data
})

export default instance
