import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/index/api.js'

/*
* 可通过 $page.handler.xxx 访问这里定义的方法
* 注意：该方法仅在所属的页面有效
* 如果需要 async-await，请修改成 export default async function() {}
*/
/**
 * 跳转服务一览
 */
export default function ({ event, data }) {
  console.log(data)
  if(data.target.index == 'search'){
    return   app.navigateTo({
    pageId: `serviceList`,
    params: { keyword: data.target.value }
  });
  }
  app.navigateTo({
    pageId: `serviceList`,
    params: { tag: data.target._id }
  });
}