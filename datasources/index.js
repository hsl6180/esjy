import { WEDA_CLOUD_SDK } from '@cloudbase/weda-client'
const {
  setConfig,
  initTcb,
  CLOUD_SDK,
  createDataset,
  createStateDataSourceVar,
  generateParamsParser,
  EXTRA_API,
  DS_API,
  DS_SDK
} = WEDA_CLOUD_SDK

export {
  createDataset,
  createStateDataSourceVar,
  generateParamsParser,
  EXTRA_API,
  CLOUD_SDK,
  DS_API,
  DS_SDK,
  setConfig
}

import config from './config'

setConfig(config)
initTcb()
