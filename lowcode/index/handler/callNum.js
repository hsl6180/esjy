import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/index/api.js'

/*
* 可通过 $page.handler.xxx 访问这里定义的方法
* 注意：该方法仅在所属的页面有效
* 如果需要 async-await，请修改成 export default async function() {}
*/

export default function ({ event, data }) {
  // 微信方法拨打号码
  wx.makePhoneCall({
    phoneNumber: $page.dataset.state.shopInfo.telphones[0] // 仅为示例，并非真实的电话号码
  })
}