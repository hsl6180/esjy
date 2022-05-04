import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handleronChange from './lowcode/handler/onChange' 
import _handleronConfirm from './lowcode/handler/onConfirm' 
import _handleronFocus from './lowcode/handler/onFocus' 
import _handleronBlur from './lowcode/handler/onBlur' 
import _handlergetForm from './lowcode/handler/getForm' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id7: {
    style: {},
    classList: [],
    layout: '',
    disabled: undefined,
    underline: true,
    labelVisible: true,
    requiredFlag: undefined,
    submitFormatter: '',
    displayFormatter: '',
    _parentId: undefined,
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:FormItem'
  },
  id9: {
    style: {},
    classList: [],
    _parentId: 'id7',
    _order: 0,
    widgetType: 'gsd-h5-react:Input'
  }
}

const evtListeners = {
  onid9$focus: [
    {
      key: 'wacceibjdi0g',
      handler:  _handleronFocus ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid9$clear: [
    {
      key: 'wai7e2sjm388',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.clear({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid9$change: [
    {
      key: 'wa67tqcphal8',
      handler:  _handleronChange ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid9$blur: [
    {
      key: 'wasuvsi48dv',
      handler:  _handleronBlur ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid9$confirm: [
    {
      key: 'wacoj4lg47lg',
      handler:  _handleronConfirm ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  name: {
    type: String,
    value: "formInput"
  },
  size: {
    type: String,
    value: "l"
  },
  type: {
    type: String,
    value: "text"
  },
  focus: {
    type: Boolean,
    value: false
  },
  label: {
    type: String,
    value: "标题"
  },
  rules: {
    type: Array,
    value: []
  },
  value: {
    type: String,
    value: ""
  },
  layout: {
    type: String,
    value: ""
  },
  disabled: {
    type: Boolean,
    value: false
  },
  password: {
    type: Boolean,
    value: false
  },
  required: {
    type: Boolean,
    value: false
  },
  clearable: {
    type: Boolean,
    value: true
  },
  maxLength: {
    type: Number,
    value: 140
  },
  placeholder: {
    type: String,
    value: "请输入"
  },
  requiredMsg: {
    type: String,
    value: "该项为必填项"
  },
  labelVisible: {
    type: Boolean,
    value: true
  },
  requiredFlag: {
    type: Boolean,
    value: false
  },
  validateStatus: {
    type: String,
    value: "success"
  },
  formauto: {
    type: String,
    value: "formRadio"
  },
}

const events = [
  {name: "blur", },
  {name: "focus", },
  {name: "change", },
  {name: "clear", },
  {name: "confirm", },
]

const handler = {
  onChange: _handleronChange, 
  onConfirm: _handleronConfirm, 
  onFocus: _handleronFocus, 
  onBlur: _handleronBlur, 
  getForm: _handlergetForm, 
}

const dataBinds = {
  id7: { 
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.name
    ); },
    rules: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rules
    ); },
    required: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.required
    ); },
    requiredMsg: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.requiredMsg
    ); },
    validateStatus: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.validateStatus
    ); },
    validateTrigger: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.validateTrigger
    ); },
  },
  id9: { 
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.name
    ); },
    size: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.size
    ); },
    type: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.type
    ); },
    focus: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.focus
    ); },
    label: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.label
    ); },
    layout: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.computed.layout
    ); },
    disabled: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.disabled
    ); },
    password: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.password
    ); },
    clearable: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.clearable
    ); },
    maxLength: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.maxLength
    ); },
    placeholder: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.placeholder
    ); },
    defaultValue: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.value
    ); },
    labelVisible: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.labelVisible
    ); },
    requiredFlag: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.required&&$comp.props.data.requiredFlag
    ); },
  },
}

const config = {"componentType":"formField"}

createComponent('CLOUDBASE_STANDARD:FormInput', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
