import datasetProfiles from './dataset-profiles'
const dataSourceProfiles = require('./datasource-profiles.js')

/**
 * 数据源基本配置
 */
export default {
  /** 当前是否处于正式发布模式 */
  isProd: false,
  /** 低码应用ID */
  appID: 'app-Vsjdkwwm',
  /** 云开发环境ID */
  envID: 'lowcode-4gmep78m8d245924',
  /** 云开发资源所属的微信app id */
  resourceAppid: '',
  /** 数据源描述对象数组 */
  dataSourceProfiles: dataSourceProfiles,
  /**
   * 新的dataset变量配置对象
   *  key 为页面ID(全局为$global), val 为变量配置数组
   */
  datasetProfiles: datasetProfiles,
}
