import process from '../../../../common/process'
import app from '../../../../common/weapp-sdk'
const $app = app;
export default {
  onAttached() {
    // console.log('onAttached', this.$WEAPPS_COMP.props.data)
    //console.log('---------> LifeCycle onAttached')
  },
  onDetached() {
    //console.log('---------> LifeCycle onDetached')
  },
  onReady() {
    // console.log("form-----",this.$WEAPPS_COMP.node.children)
    this.$WEAPPS_COMP.node.submit = this.$WEAPPS_COMP.handler.submit
    this.$WEAPPS_COMP.node.reset = this.$WEAPPS_COMP.handler.reset
    this.$WEAPPS_COMP.node.getValue = this.$WEAPPS_COMP.handler.getValue
    this.$WEAPPS_COMP.node.setValue = this.$WEAPPS_COMP.handler.setValue
    this.$WEAPPS_COMP.node.validate = this.$WEAPPS_COMP.handler.validate
    this.$WEAPPS_COMP.node.showTips = this.$WEAPPS_COMP.handler.showTips
    
    if (this.$WEAPPS_COMP.props.data.initialValues) {
      const comp = this.$WEAPPS_COMP
      setTimeout(() => {
        comp.node.setValue(comp.props.data.initialValues)
      }, 500) 
    }
    // console.log('onReady', this.$WEAPPS_COMP.props.data)
  },
};