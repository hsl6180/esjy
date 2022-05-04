import process from '../../../../common/process'
import app from '../../../../common/weapp-sdk'
const $app = app;
export default {
  onAttached() {
    console.log('===',this.$WEAPPS_COMP.widgets.id3.widgets)
    //console.log('---------> LifeCycle onAttached')
  },
  onDetached() {
    //console.log('---------> LifeCycle onDetached')
  },
};