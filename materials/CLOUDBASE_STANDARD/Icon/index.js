import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handleraddUnit from './lowcode/handler/addUnit' 
import _handlerisInternalIcon from './lowcode/handler/isInternalIcon' 
import _handlertap from './lowcode/handler/tap' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id1: {
    style: { display: 'inline-block' },
    classList: [],
    _parentId: undefined,
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id2: {
    style: {},
    classList: [],
    _parentId: 'id1',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id3: {
    style: { width: '100%', height: '100%', display: 'block' },
    classList: [],
    alt: '[icon]',
    fit: 'cover',
    mode: 'scaleToFill',
    disabled: undefined,
    lazyLoad: false,
    imgPreview: false,
    maskClosable: true,
    showMenuByLongpress: '',
    _parentId: 'id2',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  }
}

const evtListeners = {
  onid2$tap: [
    {
      key: 'wauobq09ub9g',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.tap({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  src: {
    type: String,
    value: ""
  },
  name: {
    type: String,
    value: "success"
  },
  size: {
    type: Number,
    value: 48
  },
  color: {
    type: String,
    value: ""
  },
}

const events = [
  {name: "tap", },
]

const handler = {
  addUnit: _handleraddUnit, 
  isInternalIcon: _handlerisInternalIcon, 
  tap: _handlertap, 
}

const dataBinds = {
  id2: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.handler.isInternalIcon() ? $comp.props.data.name.indexOf('td:') != -1 ? `t-icon-${$comp.props.data.name.replace("td:", "")} t-icon ` : `lcap-icon-${$comp.props.data.name} lcap-icon` : '', widgetProps.id2.classList)
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id2.style, ...($comp.handler.isInternalIcon() ? {"font-size": `${$comp.props.data.size}px`, color: $comp.props.data.color} : {width: `${$comp.props.data.size}px`, height: `${$comp.props.data.size}px`,  color: $comp.props.data.color})})
    ); },
  },
  id3: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.src
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.handler.isInternalIcon()
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Icon', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
