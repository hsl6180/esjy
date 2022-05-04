import process from '../../../../../common/process'
import app from '../../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.handler.xxx 访问这里定义的方法
* 
* 如果需要 async-await，请修改成 export default async function() {}
*/

export default function() {
    const {col, reverse,flexWrap,alignItems,justifyContent} = this.$WEAPPS_COMP.props.data
    let classList = []

    if(flexWrap === 'nowrap'){
        classList.push('lcap-flex-wrap-nowrap')
    }

    if(alignItems) {
        classList.push(`lcap-align-items-${alignItems}`)
    }

    if (justifyContent) {
        classList.push(`lcap-justify-content-${justifyContent}`);
    }

    if (reverse) {
        classList.push('lcap-flex-row-reverse');
    } else if (col) {
        classList.push('lcap-flex-col');
    }
    return classList
};