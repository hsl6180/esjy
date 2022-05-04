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
  id2: {
    style: {},
    classList: [],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id3: {
    style: { display: 'flex', justifyContent: 'center' },
    classList: [],
    title: '',
    _parentId: 'id2',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id5: {
    style: { display: 'flex', justifyContent: 'center' },
    classList: [],
    name: 'header',
    _parentId: 'id3',
    _order: 0,
    widgetType: 'gsd-h5-react:Slot'
  },
  id7: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    classList: [],
    title: '',
    _parentId: 'id2',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id8: {
    style: {},
    classList: [],
    name: 'content',
    _parentId: 'id7',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id9: {
    style: { display: 'flex', justifyContent: 'center' },
    classList: [],
    title: '',
    _parentId: 'id2',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id10: {
    style: {},
    classList: [],
    name: 'footer',
    _parentId: 'id9',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  }
}

const evtListeners = {
}

const behaviors = []

const properties = {
  footer: {
    type: String,
    value: ""
  },
  header: {
    type: String,
    value: ""
  },
  content: {
    type: String,
    value: ""
  },
}

const events = [
]

const handler = {
}

const dataBinds = {
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Layout', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
