import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlergetClassList from './lowcode/handler/getClassList' 
import _handlergetStyle from './lowcode/handler/getStyle' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id1: {
    style: {},
    classList: [ 'lcap-row' ],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id3: {
    style: {},
    classList: [],
    name: 'child',
    _parentId: 'id1',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  }
}

const evtListeners = {
}

const behaviors = []

const properties = {
  col: {
    type: Boolean,
    value: false
  },
  child: {
    type: String,
    value: ""
  },
  gutter: {
    type: Number,
    value: 20
  },
  reverse: {
    type: Boolean,
    value: false
  },
  flexWrap: {
    type: String,
    value: "wrap"
  },
  alignItems: {
    type: String,
    value: "stretch"
  },
  justifyContent: {
    type: String,
    value: "flex-start"
  },
}

const events = [
]

const handler = {
  getClassList: _handlergetClassList, 
  getStyle: _handlergetStyle, 
}

const dataBinds = {
  id1: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.handler.getClassList(), widgetProps.id1.classList)
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id1.style, ...($comp.handler.getStyle())})
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Row', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
