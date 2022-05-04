import { app, process } from '../../app/weapps-api';
const $app = app;

/*
* 函数里面访问：通过 app.common.[name].xxx 访问这里定义的方法或值
* 函数外面访问：通过 import（如在页面的 handler 引用的例子：import { xxx } from '../../common/[name]'）
*/

export const WXStorage = {
  getStorage(key){
    try{
      return app.platform === 'WEB' ? JSON.parse(window.localStorage.getItem(key)) : JSON.parse(wx.getStorageSync(key))
    } catch (e) {
      console.error(e)
    }
  },
  setStorage(key, value){
    try {
      app.platform === 'WEB' ? window.localStorage.setItem(key, JSON.stringify(value)) : wx.setStorageSync(key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
  },
  clearStorage(key){
    try{
      app.platform ===  'WEB' ? window.localStorage.removeItem(key) : wx.clearStorageSync(key)
    } catch (e){
      console.error(e)
    }
  }
}
