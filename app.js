import { setConfig } from './datasources/index'
import lifeCycle from './lowcode/lifecycle'
import { app } from './app/weapps-api'
import WxReportV2 from './common/wx_yypt_report_v2'
// 引入数据源管理器并进行初始化
import { EXTRA_API, createStateDataSourceVar, generateParamsParser } from './datasources/index'
const $app = app;

      App({
        onLaunch(options) {
          this.app = app
          const onLaunch = lifeCycle.onLaunch || lifeCycle.onAppLaunch
          let { query = {} } = options
          EXTRA_API.setParams('$global', query)
          createStateDataSourceVar('$global', generateParamsParser({ app }))

          onLaunch && onLaunch.call(this, options)
            

                  // 初始私有全局数据
                  this.$$global = {
            homePageId: 'u_deng_lu'
          }
        },
        onShow(options) {
          const fn = lifeCycle.onShow || lifeCycle.onAppShow
          fn && fn.call(this, options)
            
  },
        onHide() {
          const fn = lifeCycle.onHide || lifeCycle.onAppHide
          fn && fn.call(this)
        },
        onError(msg) {
          const fn = lifeCycle.onError || lifeCycle.onAppError
          fn && fn.call(this, msg)
        },
        onPageNotFound() {
          const fn = lifeCycle.onPageNotFound || lifeCycle.onAppPageNotFound
          fn && fn.call(this)
        },
        onUnhandledRejection() {
          const fn = lifeCycle.onUnhandledRejection || lifeCycle.onAppUnhandledRejection
          fn && fn.call(this)
        },
      })
