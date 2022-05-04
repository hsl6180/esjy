import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/index/api.js'

/*
* 可通过 $page.handler.xxx 访问这里定义的方法
* 注意：该方法仅在所属的页面有效
* 如果需要 async-await，请修改成 export default async function() {}
*/
/**
 * 跳转预约技师
 */
export default function ({ event, data }) {
  const employeeInfo = {
    _id: data.target._id,
    avatar: data.target.avatar,
    name: data.target.name,
    job: data.target.job
  }
  app.navigateTo({
    pageId: `bookingTechnician`,
    params: {
      employeeInfo: employeeInfo
    }
  });
}