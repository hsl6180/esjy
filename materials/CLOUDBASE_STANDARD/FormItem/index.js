import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlergetForm from './lowcode/handler/getForm' 
import _handlergetFormChild from './lowcode/handler/getFormChild' 
import _handlerhandleValidate from './lowcode/handler/handleValidate' 
import _handlersetValidateState from './lowcode/handler/setValidateState' 
import _handlersetValue from './lowcode/handler/setValue' 
import _handlergetFormField from './lowcode/handler/getFormField' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id9: {
    style: {},
    classList: [ 'gsd-h5-react-formitem' ],
    title: '',
    _parentId: undefined,
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id10: {
    style: {},
    classList: [],
    name: 'contentSlot',
    disabled: undefined,
    _parentId: 'id9',
    _order: 0,
    widgetType: 'gsd-h5-react:Slot'
  },
  id11: {
    style: {},
    classList: [],
    type: 'warn',
    disabled: undefined,
    _parentId: 'id9',
    _order: 1,
    widgetType: 'gsd-h5-react:Tips'
  }
}

const evtListeners = {
}

const behaviors = []

const properties = {
  name: {
    type: String,
    value: "thisIsInputKey"
  },
  rules: {
    type: Array,
    value: []
  },
  layout: {
    type: String,
    value: ""
  },
  required: {
    type: Boolean,
    value: false
  },
  requiredMsg: {
    type: String,
    value: "该项为必填项"
  },
  requiredFlag: {
    type: Boolean,
    value: true
  },
  validateStatus: {
    type: String,
    value: "success"
  },
  submitFormatter: {
    type: Object,
    
  },
  validateTrigger: {
    type: String,
    value: "onChange"
  },
}

const events = [
  {name: "validator", },
]

const handler = {
  getForm: _handlergetForm, 
  getFormChild: _handlergetFormChild, 
  handleValidate: _handlerhandleValidate, 
  setValidateState: _handlersetValidateState, 
  setValue: _handlersetValue, 
  getFormField: _handlergetFormField, 
}

const dataBinds = {
  id11: { 
    tips: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.state._help
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.state._validateStatus!=='success'
    ); },
  },
}

const config = {"componentType":"formItem"}

createComponent('CLOUDBASE_STANDARD:FormItem', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
