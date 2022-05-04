import process from '../../../../common/process'
import app from '../../../../common/weapp-sdk'
const $app = app;
export default {
  onAttached() {
    // console.log(app.platform)
    // if (app.platform == 'WEB') {
    //   this.$WEAPPS_COMP.props.data.acceptTypes = 'crosswiseTextTop';
    //   this.$WEAPPS_COMP.props.data.acceptTypesMP = null;
    // } else {
    //   this.$WEAPPS_COMP.props.data.acceptTypesMP = 'lengthwaysTextLeftMP';
    //   this.$WEAPPS_COMP.props.data.acceptTypes = null;
    // }
    //console.log('---------> LifeCycle onAttached')
  },
  onDetached() {
    //console.log('---------> LifeCycle onDetached')
  },
};