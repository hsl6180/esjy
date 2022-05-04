import { app, process } from '../app/weapps-api';
const $app = app;

import WXStorage from './common/storage'
import isUserExist from './common/getUserInfo'
export default {
  async onAppLaunch(launchOpts) {
    //console.log('---------> LifeCycle onAppLaunch', launchOpts)
    const objData = await app.cloud.dataSources.userinfo_921rlqd.getopenid();
    app.dataset.state.useropenid=objData.openid;  //赋给全局变量
    let name = $page.dataset.params.name
    let res = await app.cloud.dataSources.product_gpea5rj.wedaGetRecords({
  "where": [
      {
        "key": "name",
        "rel": "search",
        "val": name
      }
    ]
  });
 $page.dataset.state.list = res.records
  },
  onAppShow(appShowOpts) {
    //console.log('---------> LifeCycle onAppShow', appShowOpts)
  },
  onAppHide() {
    //console.log('---------> LifeCycle onAppHide')
  },
  onAppError(options) {
    //console.log('---------> LifeCycle onAppError', options)
  },
  onAppPageNotFound(options) {
    //console.log('---------> LifeCycle onAppPageNotFound', options)
  },
  onAppUnhandledRejection(options) {
    //console.log('---------> LifeCycle onAppUnhandledRejection', options)
  }
}