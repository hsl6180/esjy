import { observable } from 'mobx'
import { createMpApp } from '@cloudbase/weda-client';
import { createComputed } from '../common/util'
import process from '../common/process'
import appGlobal from '../app/app-global'
import { createDataset, EXTRA_API } from '../datasources/index'


import state from '../lowcode/state'
  import computed from '../lowcode/computed'
  import common from './common'


const mainAppKey = '__weappsMainApp'

export const app = createGlboalApi()
export { process }

function createGlboalApi() {
  const mpApp = createMpApp();
  const globalAPI = {
    id: 'app-Vsjdkwwm',
    domain: 'lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com',
    activePage: null,
    pages: {},
    session: {
      //configure: sdk.configure,
      //request: sdk.request,
      //getSessionId: sdk.getSessionId,
    },
    state: observable(state),
    computed: createComputed(computed),
    common,
    ...mpApp
    // ... other sdk apis & apis from mp
  } // The global api exposed to lowcode

  let dataset = createDataset('$global')
  globalAPI.dataset = dataset
  globalAPI.state.dataset = dataset
  globalAPI.setState = (userSetState) => {
    Object.keys(userSetState).forEach((keyPath) => {
      globalAPI.utils.set(globalAPI.dataset.state, keyPath, userSetState[keyPath]);
    });
  };
  /**
  * 内部通用的设置状态变量值的方法
  *  varPath 结构为 $global.<变量名> 即全局变量
  *                $page.<变量名>  即当前页面变量
  *                <pageId>.<变量名> 指定页面 pageId 的变量 (应当避免修改非当前页面的变量值)
  */
  globalAPI._setStateVal = (config) => {
    // @ts-ignore
    EXTRA_API.setState(config.varPath, config.val);
  };

  const subPackageName = ''
  if (subPackageName) {
    // is sub app
    globalAPI.mainApp = appGlobal[mainAppKey]
    const mpApp = getApp()
    mpApp && (mpApp.subApp = globalAPI)
  } else {
    // is mainApp
    appGlobal[mainAppKey] = globalAPI
  }

  // # expose some sdk modules
  /* const sdkModsIncluded = ['flow', 'getPageOptions', 'getLaunchOptions']
  sdkModsIncluded.forEach(key => {
    globalAPI[key] = sdk[key]
  }) */

  return globalAPI
}
