import { app, process } from '../../app/weapps-api';
const $app = app;
import { $page } from '../../pages/u_liao_tian/api.js'

/*
* 可通过 $page.computed.xxx 访问这里定义的计算状态
* 注意：页面级别的计算状态仅在所属的页面有效
*/

export default {
  name() { return 'LowCode' }
}