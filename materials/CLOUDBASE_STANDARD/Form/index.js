import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlergetValue from './lowcode/handler/getValue' 
import _handlerreset from './lowcode/handler/reset' 
import _handlersetValue from './lowcode/handler/setValue' 
import _handlershowTips from './lowcode/handler/showTips' 
import _handlersubmit from './lowcode/handler/submit' 
import _handlervalidate from './lowcode/handler/validate' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id8: {
    style: {},
    classList: [],
    disabled: undefined,
    _parentId: undefined,
    _order: 0,
    widgetType: 'gsd-h5-react:Form'
  },
  id9: {
    style: {},
    classList: [],
    name: 'contentSlot',
    disabled: undefined,
    _parentId: 'id8',
    _order: 0,
    widgetType: 'gsd-h5-react:Slot'
  }
}

const evtListeners = {
}

const behaviors = []

const properties = {
  _id: {
    type: String,
    
  },
  fields: {
    type: Array,
    
  },
  layout: {
    type: String,
    value: "horizontal"
  },
  varPath: {
    type: String,
    
  },
  formType: {
    type: String,
    value: "create"
  },
  initialValues: {
    type: Object,
    value: {}
  },
  datasourceType: {
    type: String,
    value: "model"
  },
}

const events = [
  {name: "submit", },
]

const handler = {
  getValue: _handlergetValue, 
  reset: _handlerreset, 
  setValue: _handlersetValue, 
  showTips: _handlershowTips, 
  submit: _handlersubmit, 
  validate: _handlervalidate, 
}

const dataBinds = {
}

const config = {"componentType":"form"}

createComponent('CLOUDBASE_STANDARD:Form', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
