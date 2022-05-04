import process from '../../../../../common/process'
import app from '../../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.handler.xxx 访问这里定义的方法
* 
* 如果需要 async-await，请修改成 export default async function() {}
*/

export default function({event, data}) {
    console.log('timeline Onclic event is',event);
    console.log('timeline Onclic this.$WEAPPS_COMP is',data);
    return this.$WEAPPS_COMP.props.events.onClick(data);
};