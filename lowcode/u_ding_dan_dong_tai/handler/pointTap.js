import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/u_ding_dan_dong_tai/api.js'

/*
* 可通过 $page.handler.xxx 访问这里定义的方法
* 注意：该方法仅在所属的页面有效
* 如果需要 async-await，请修改成 export default async function() {}
*/

export default function({event, data}) {
console.log('pointTap click event is',event)
console.log('pointTap click data is',data)
}