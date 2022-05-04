import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/index/api.js'

/*
* 可通过 $page.handler.xxx 访问这里定义的方法
* 注意：该方法仅在所属的页面有效
* 如果需要 async-await，请修改成 export default async function() {}
*/
/**
 * 跳转面部专区
 */
export default function ({ event, data }) {
  app.navigateTo({
    pageId: 'faceArea',    // 页面 Id 
    params: data.target,
  });
}