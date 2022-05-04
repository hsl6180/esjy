import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handleronChange from './lowcode/handler/onChange' 
import _handlergetForm from './lowcode/handler/getForm' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id1: {
    style: {},
    classList: [],
    rules: [],
    layout: '',
    disabled: undefined,
    underline: true,
    labelVisible: true,
    requiredFlag: true,
    validateStatus: 'success',
    submitFormatter: '',
    validateTrigger: 'onChange',
    displayFormatter: '',
    _parentId: undefined,
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:FormItem'
  },
  id2: {
    style: {},
    classList: [],
    _parentId: 'id1',
    _order: 0,
    widgetType: 'gsd-h5-react:Radio'
  }
}

const evtListeners = {
  onid2$change: [
    {
      key: 'wa59grhajr4',
      handler:  _handleronChange ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  name: {
    type: String,
    value: "formRadio"
  },
  label: {
    type: String,
    value: "单选"
  },
  range: {
    type: Array,
    value: [{"label":"单选-选项1","value":"1"},{"label":"单选-选项2","value":"2"}]
  },
  value: {
    type: String,
    value: ""
  },
  format: {
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
  enumName: {
    type: String,
    value: ""
  },
  required: {
    type: Boolean,
    value: false
  },
  tipBlock: {
    type: String,
    value: ""
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
  formauto: {
    type: String,
    value: "formRadio"
  },
}

const events = [
  {name: "change", },
]

const handler = {
  onChange: _handleronChange, 
  getForm: _handlergetForm, 
}

const dataBinds = {
  id1: { 
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.name
    ); },
    required: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.required
    ); },
    requiredMsg: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.requiredMsg
    ); },
  },
  id2: { 
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.name
    ); },
    label: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.label
    ); },
    range: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.computed.range
    ); },
    format: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.format
    ); },
    layout: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.computed.layout
    ); },
    disabled: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.disabled
    ); },
    enumName: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.enumName
    ); },
    tipBlock: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.tipBlock
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

createComponent('CLOUDBASE_STANDARD:FormRadio', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
