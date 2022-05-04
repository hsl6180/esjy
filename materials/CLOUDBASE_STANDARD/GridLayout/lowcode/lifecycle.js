import process from '../../../../common/process'
import app from '../../../../common/weapp-sdk'
const $app = app;
let mql;

const listener = () => {
  console.log(mql && !!mql.matches)
  this.$WEAPPS_COMP.state.smallScreen = mql && !!mql.matches;
}


export default {
  onAttached() {
    if (window.innerWidth < 1024) {
      this.$WEAPPS_COMP.state.smallScreen = true;
    }
    if (window.matchMedia){
      mql = window.matchMedia('(max-width: 1024px)');
      if(mql && mql.addEventListener){
        mql.addEventListener('change', listener);
      }
    }
  },
  onDetached() {
    if(mql && mql.removeEventListener) {
      mql.removeEventListener('change', listener);
    }
  },
};