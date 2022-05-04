import process from '../../../../common/process'
import app from '../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.computed.xxx 访问这里定义的计算状态
* 
*/

export default {
  range() {
    const range = this.$WEAPPS_COMP.props.data.range && this.$WEAPPS_COMP.props.data.range.map((item) => {
      const checked = this.$WEAPPS_COMP.props.data.value === item.value
      return {
        value: item.value,
        label: item.label,
        checked: !!checked,
      };
    });
    return range;
  },
  layout() {
    const { layout } = this.$WEAPPS_COMP.props.data
    const form = this.$WEAPPS_COMP.handler.getForm()
    const formLayout = form && form.layout
    return (layout || formLayout)
  }
};