import process from '../../../../../common/process'
import app from '../../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.handler.xxx 访问这里定义的方法
* 
* 如果需要 async-await，请修改成 export default async function() {}
*/

export default function(index) {
    if(this.$WEAPPS_COMP.props.data.mobileLayout === 'vertical' && window.innerWidth < 1024) {
        return `col-12`;
    }
    let {columnList} = this.$WEAPPS_COMP.computed
    return `col-${columnList[index] && columnList[index].value}`
};