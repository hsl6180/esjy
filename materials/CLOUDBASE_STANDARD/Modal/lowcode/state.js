import process from '../../../../common/process'
import app from '../../../../common/weapp-sdk'
const $app = app;

/*
* 可通过 this.$WEAPPS_COMP.state.xxx 访问这里定义的状态
* 
* 修改状态时，直接赋值即可。如：this.$WEAPPS_COMP.state.xxx = 'xxx'
* 请注意：避免在页面处于后台状态时state，页面在后台时对全局state的修改会丢失！
*/



export default function() {
  return {
    _lastVisible:false,
    contentIn: false,
  }
}

;