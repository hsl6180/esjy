import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handleronPcModalClose from './lowcode/handler/onPcModalClose' 
import _handleronPcModalConfirm from './lowcode/handler/onPcModalConfirm' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id1: {
    style: {},
    classList: [ 'lcap-modal' ],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id17: {
    style: {},
    classList: [ 'container' ],
    title: '',
    disabled: undefined,
    _parentId: 'id1',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id2: {
    style: {},
    classList: [ 'lcap-modal__mask' ],
    title: '',
    _parentId: 'id17',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id3: {
    style: {},
    classList: [ 'lcap-modal__dialog' ],
    title: '',
    _parentId: 'id17',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id4: {
    style: {},
    classList: [],
    title: 'modal-header',
    _parentId: 'id3',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id12: {
    style: {},
    classList: [],
    name: 'customContent',
    _parentId: 'id4',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id15: {
    style: { whiteSpace: 'pre-line' },
    classList: [],
    space: false,
    maxLines: 2,
    userSelect: true,
    _parentId: 'id4',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id5: {
    style: {},
    classList: [ 'lcap-modal__confirm_btn' ],
    title: '',
    _parentId: 'id3',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id8: {
    style: {
      width: '100%',
      color: 'rgb(255, 255, 255)',
      borderWidth: '0rpx',
      borderRadius: '0rpx',
      background: 'rgb(50, 129, 248)',
      position: 'fixed',
      left: '0rpx',
      right: '0rpx',
      bottom: '0rpx'
    },
    classList: [],
    lang: 'en',
    size: 'default',
    text: '',
    type: 'default',
    plain: false,
    divider: '',
    loading: false,
    disabled: false,
    formType: 'button',
    openType: '',
    categoryId: [],
    sessionFrom: '',
    appParameter: '',
    sendMessageImg: '',
    sendMessagePath: '',
    showMessageCard: '',
    sendMessageTitle: '',
    _parentId: 'id5',
    _order: 0,
    widgetType: 'gsd-h5-react:Button'
  },
  id9: {
    style: { zIndex: 30, position: 'static', bottom: '0rpx' },
    classList: [],
    text: '确定',
    space: '',
    decode: false,
    maxLines: 2,
    selectable: false,
    userSelect: true,
    _parentId: 'id8',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id13: {
    style: {
      color: 'rgb(255, 255, 255)',
      borderWidth: '0rpx',
      borderRadius: '0rpx',
      background: 'rgb(50, 129, 248)',
      position: 'fixed',
      left: '0rpx',
      right: '0rpx',
      bottom: '0rpx'
    },
    classList: [],
    name: 'customButton',
    _parentId: 'id5',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id6: {
    style: {},
    classList: [ 'lcap-modal__close_btn' ],
    title: '',
    _parentId: 'id3',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id14: {
    style: {},
    classList: [],
    src: '',
    name: 'close',
    size: 48,
    color: 'rgb(136, 136, 136)',
    _parentId: 'id6',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id24: {
    style: {},
    classList: [],
    size: 'auto',
    disabled: undefined,
    _parentId: 'id1',
    _order: 2,
    widgetType: 'gsd-h5-react:Modal'
  },
  id23: {
    style: {
      color: 'rgb(255, 255, 255)',
      borderWidth: '0rpx',
      borderRadius: '0rpx',
      background: 'rgb(50, 129, 248)',
      position: 'fixed',
      left: '0rpx',
      right: '0rpx',
      bottom: '0rpx'
    },
    classList: [],
    name: 'customButton',
    _parentId: 'id24',
    _order: 0,
    widgetType: 'gsd-h5-react:Slot'
  },
  id22: {
    style: {},
    classList: [],
    name: 'customContent',
    _parentId: 'id24',
    _order: 0,
    widgetType: 'gsd-h5-react:Slot'
  }
}

const evtListeners = {
  onid8$tap: [
    {
      key: '',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.comfirm({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid6$tap: [
    {
      key: '',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.close({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid24$close: [
    {
      key: 'wa7anjvdlbn',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.close({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid24$confirm: [
    {
      key: 'waoo4cumg19g',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.comfirm({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  content: {
    type: String,
    value: ""
  },
  visible: {
    type: Boolean,
    value: true
  },
  customButton: {
    type: String,
    
  },
  customContent: {
    type: String,
    
  },
  isDefaultButton: {
    type: Boolean,
    value: true
  },
}

const events = [
  {name: "close", },
  {name: "comfirm", },
]

const handler = {
  onPcModalClose: _handleronPcModalClose, 
  onPcModalConfirm: _handleronPcModalConfirm, 
}

const dataBinds = {
  id17: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      ($comp.props.data.visible || $comp.computed.contentIn) && $comp.state._mode!=='pc'
    ); },
  },
  id3: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.visible && $comp.computed.contentIn ? 'enter' : '', widgetProps.id3.classList)
    ); },
  },
  id12: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.content
    ); },
  },
  id15: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.content
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.content
    ); },
  },
  id8: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.isDefaultButton
    ); },
  },
  id13: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.isDefaultButton
    ); },
  },
  id24: { 
    content: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.content
    ); },
    visible: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.visible
    ); },
    isDefaultButton: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.isDefaultButton
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.state._mode==='pc'
    ); },
  },
  id23: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.isDefaultButton
    ); },
  },
  id22: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.content
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Modal', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
