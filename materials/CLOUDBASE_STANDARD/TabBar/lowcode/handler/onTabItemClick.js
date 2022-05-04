import process from '../../../../../common/process'
import app from '../../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.handler.xxx 访问这里定义的方法
* 
* 如果需要 async-await，请修改成 export default async function() {}
*/

export default function ({ event }) {
    let value = event.detail
    let { route, routeType } = this.$WEAPPS_COMP.props.data
    if (route) {
        let action = app[routeType] || app.navigateTo
        action({ pageId: value })
    } else {
        this.$WEAPPS_COMP.props.events.change(value)
        if(!value) return
        let tab = this.$WEAPPS_COMP.props.data.tabs.find(item => item.name == value)
        let params = tab.params
        let paramObj =
            params &&
            params.length > 0 &&
            params.reduce((p, x) => {
                p[x.key] = x.value;
                return p;
            }, {});
        let action = app[routeType] || app.redirectTo
        action({ pageId: value, params: paramObj })
        
    }
};