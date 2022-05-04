import process from '../../../../common/process'
import app from '../../../../common/weapp-sdk'
const $app = app;
export default {
  onAttached() {
    this.$WEAPPS_COMP.state.aaa = false
    this.$WEAPPS_COMP.state._lastVisible = this.$WEAPPS_COMP.props.data.visible
    this.$WEAPPS_COMP.state.contentIn = this.$WEAPPS_COMP.props.data.visible
    if(app.platform === 'WEB') {
      if(window.matchMedia) {
        let match = window.matchMedia('(max-width: 1024px)');
        this.$WEAPPS_COMP.state._match = match
        this.$WEAPPS_COMP.state._listener = function(match){
          if (match && match.matches){
            this.$WEAPPS_COMP.state._mode = 'mobile'
          } else {
            this.$WEAPPS_COMP.state._mode = 'pc'
          }
        }.bind(this)
        if(match && match.addEventListener) {
          match.addEventListener('change', this.$WEAPPS_COMP.state._listener)
        }
        this.$WEAPPS_COMP.state._listener(match)
      }
    }
   
    //console.log('---------> LifeCycle onAttached')
  },
  onDetached() {
    if(this.$WEAPPS_COMP.state._match && this.$WEAPPS_COMP.state._match.removeListener && this.$WEAPPS_COMP.state._listener){
      this.$WEAPPS_COMP.state._match.removeListener(this.$WEAPPS_COMP.state._listener)
    }
    //console.log('---------> LifeCycle onDetached')
  },
};