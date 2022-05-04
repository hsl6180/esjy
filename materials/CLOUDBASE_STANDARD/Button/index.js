import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlerclick from './lowcode/handler/click' 
import _handlergetForm from './lowcode/handler/getForm' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id2: {
    style: {},
    classList: [],
    categoryId: undefined,
    sessionFrom: undefined,
    appParameter: undefined,
    sendMessageImg: undefined,
    sendMessagePath: undefined,
    showMessageCard: undefined,
    sendMessageTitle: undefined,
    _parentId: undefined,
    _order: 0,
    widgetType: 'gsd-h5-react:Button'
  },
  id4: {
    style: {},
    classList: [],
    name: 'contentSlot',
    disabled: undefined,
    _parentId: 'id2',
    _order: 0,
    widgetType: 'gsd-h5-react:Slot'
  }
}

const evtListeners = {
  onid2$tap: [
    {
      key: 'waqhus4batk',
      handler:  _handlerclick ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid2$contact: [
    {
      key: 'waq0lh85jbv8',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.contact({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid2$getPhoneNumber: [
    {
      key: 'wamcetjd28f8',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.getPhoneNumber({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid2$launchApp: [
    {
      key: 'wal24kajtki8',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.launchApp({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid2$openSetting: [
    {
      key: 'wallqrjug1qg',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.openSetting({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  size: {
    type: String,
    value: "default"
  },
  type: {
    type: String,
    value: "primary"
  },
  content: {
    type: String,
    value: "按钮"
  },
  loading: {
    type: Boolean,
    value: false
  },
  disabled: {
    type: Boolean,
    value: false
  },
  formType: {
    type: String,
    value: "button"
  },
  openType: {
    type: String,
    value: ""
  },
  categoryId: {
    type: Array,
    
  },
  sessionFrom: {
    type: String,
    value: ""
  },
  appParameter: {
    type: String,
    value: ""
  },
  sendMessageImg: {
    type: String,
    value: ""
  },
  sendMessagePath: {
    type: String,
    value: ""
  },
  showMessageCard: {
    type: Boolean,
    value: false
  },
  sendMessageTitle: {
    type: String,
    value: ""
  },
}

const events = [
  {name: "tap", },
  {name: "getPhoneNumber", },
  {name: "contact", },
  {name: "launchApp", },
  {name: "openSetting", },
]

const handler = {
  click: _handlerclick, 
  getForm: _handlergetForm, 
}

const dataBinds = {
  id2: { 
    size: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.size
    ); },
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.content
    ); },
    type: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.type
    ); },
    loading: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.loading
    ); },
    disabled: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.disabled
    ); },
    formType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.formType
    ); },
    openType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.openType
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Button', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
