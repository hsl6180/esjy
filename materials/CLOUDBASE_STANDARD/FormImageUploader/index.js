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
import _handleronError from './lowcode/handler/onError' 
import _handleronSuccess from './lowcode/handler/onSuccess' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id5: {
    style: {},
    classList: [],
    rules: [],
    layout: '',
    disabled: undefined,
    validateStatus: 'success',
    submitFormatter: null,
    validateTrigger: 'onChange',
    _parentId: undefined,
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:FormItem'
  },
  id7: {
    style: {},
    classList: [],
    disabled: false,
    required: true,
    requiredMsg: '该项为必填项',
    labelVisible: true,
    _parentId: 'id5',
    _order: 0,
    widgetType: 'gsd-h5-react:Uploader'
  }
}

const evtListeners = {
  onid7$success: [
    {
      key: 'wa7j2jl11rag',
      handler:  _handleronSuccess ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid7$error: [
    {
      key: 'warbch98610g',
      handler:  _handleronError ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid7$change: [
    {
      key: 'walu8m3t0l98',
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
    value: "images"
  },
  title: {
    type: String,
    value: "上传图片"
  },
  value: {
    type: Array,
    
  },
  layout: {
    type: String,
    value: ""
  },
  single: {
    type: Boolean,
    value: false
  },
  maxSize: {
    type: Number,
    value: 10
  },
  disabled: {
    type: Boolean,
    value: false
  },
  required: {
    type: Boolean,
    value: false
  },
  acceptTypes: {
    type: Array,
    value: ["image/*"]
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
  maxUploadCount: {
    type: Number,
    value: 9
  },
  disableMultiSwitch: {
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
  {name: "success", },
  {name: "error", },
]

const handler = {
  onChange: _handleronChange, 
  getForm: _handlergetForm, 
  onError: _handleronError, 
  onSuccess: _handleronSuccess, 
}

const dataBinds = {
  id5: { 
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.name
    ); },
    required: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.required
    ); },
    requiredMsg: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.requiredMsg
    ); },
    requiredFlag: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.requiredFlag
    ); },
  },
  id7: { 
    tips: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.tips
    ); },
    title: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title
    ); },
    value: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.value
    ); },
    layout: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.computed.layout
    ); },
    single: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.single
    ); },
    maxSize: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.maxSize
    ); },
    btnTitle: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.btnTitle
    ); },
    acceptTypes: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes
    ); },
    defaultValue: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      typeof($comp.props.data.value)=='string'?$comp.props.data.value==''?null:$comp.props.data.value.split(','):$comp.props.data.value
    ); },
    requiredFlag: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.required&&$comp.props.data.requiredFlag
    ); },
    maxUploadCount: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.maxUploadCount
    ); },
  },
}

const config = {"componentType":"formField"}

createComponent('CLOUDBASE_STANDARD:FormImageUploader', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
