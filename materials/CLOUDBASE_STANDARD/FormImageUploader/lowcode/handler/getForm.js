import process from '../../../../../common/process'
import app from '../../../../../common/weapp-sdk'
const $app = app;
function ensureForm(comp) {
    if (!comp) {
        return true
    }
    return comp.getConfig && comp.getConfig().componentType === 'form'
}

export default function () {
    let cur = this.$WEAPPS_COMP.node
    while (!ensureForm(cur)) {
        if (!cur) return null
        if (cur.parent) {
            cur = cur.parent
        } else {
            cur = cur.getOwnerWidget()
        }
    }
    return cur
};