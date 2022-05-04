
import * as getServiceInfo from '../lowcode/common/getServiceInfo'
import * as getUserInfo from '../lowcode/common/getUserInfo'
import * as storage from '../lowcode/common/storage'

const _weapps_app_common = {}

function getDefaultModule(targetModule) {
  if (!targetModule) {
    return
  }
  const keys = Object.keys(targetModule)
  if (keys.length === 1 && keys[0] === 'default') {
    return targetModule.default
  }
  return targetModule
}

Object.defineProperties(_weapps_app_common, {
  
  getServiceInfo: {
      get() {
        return getDefaultModule(getServiceInfo)
      }
    },
  getUserInfo: {
      get() {
        return getDefaultModule(getUserInfo)
      }
    },
  storage: {
      get() {
        return getDefaultModule(storage)
      }
    },
})

export default _weapps_app_common
