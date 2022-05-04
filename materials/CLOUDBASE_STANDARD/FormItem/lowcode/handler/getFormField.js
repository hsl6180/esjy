import process from '../../../../../common/process'
import app from '../../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.handler.xxx 访问这里定义的方法
* 
* 如果需要 async-await，请修改成 export default async function() {}
*/


export default function () {
    return getFormField(this.$WEAPPS_COMP.node)
}

function ensureFormField(comp) {
    if (!comp) {
        return true
    }
    return comp.getConfig && comp.getConfig().componentType === 'formField'
}

function getFormField (node) {
    let cur = node
    while (!ensureFormField(cur)) {
        if (!cur) return null
        if (cur.parent) {
            cur = cur.parent
        } else {
            cur = cur.getOwnerWidget()
        }
    }
    return cur
};