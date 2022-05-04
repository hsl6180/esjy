import process from '../../../../../common/process'
import app from '../../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.handler.xxx 访问这里定义的方法
* 
* 如果需要 async-await，请修改成 export default async function() {}
*/

export default function(status, msg) {
    this.$WEAPPS_COMP.state._validateStatus = status
    this.$WEAPPS_COMP.state._help = msg
};