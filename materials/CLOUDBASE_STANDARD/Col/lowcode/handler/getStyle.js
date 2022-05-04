import process from '../../../../../common/process'
import app from '../../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.handler.xxx 访问这里定义的方法
* 
* 如果需要 async-await，请修改成 export default async function() {}
*/

export default function() {
    let {gutter, gutterY } = this.$WEAPPS_COMP.props.data
    const gutterLR = Math.ceil(Number(gutter) / 2);
    const gutterTD = Math.ceil(Number(gutterY) / 2);
    return {
        padding: `${gutterTD}px ${gutterLR}px`,
    }
};