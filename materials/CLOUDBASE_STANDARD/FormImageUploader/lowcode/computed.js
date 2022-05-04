import process from '../../../../common/process'
import app from '../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.computed.xxx 访问这里定义的计算状态
* 
*/

export default {
  layout() {
    const { layout } = this.$WEAPPS_COMP.props.data
    if(layout) return layout;
    const form = this.$WEAPPS_COMP.handler.getForm()
    const formLayout = form && form.layout
    return (layout || formLayout)
  }
};