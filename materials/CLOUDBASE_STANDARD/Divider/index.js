import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id5: {
    style: {},
    classList: [],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id7: {
    style: {},
    classList: [ 'lcap-divider' ],
    title: '',
    _parentId: 'id5',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  }
}

const evtListeners = {
}

const behaviors = []

const properties = {
}

const events = [
]

const handler = {
}

const dataBinds = {
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Divider', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
