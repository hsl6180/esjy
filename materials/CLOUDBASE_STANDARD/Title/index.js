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
  id1: {
    style: {},
    classList: [],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id3: {
    style: { fontWeight: 'bolder' },
    classList: [ 'lcap-title' ],
    title: '',
    _parentId: 'id1',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id2: {
    style: {
      display: 'inline',
      color: 'rgb(0, 0, 0)',
      fontSize: '32rpx',
      fontWeight: 'normal'
    },
    classList: [ 'lcap-text' ],
    space: '',
    decode: false,
    maxLines: 2,
    selectable: true,
    userSelect: true,
    _parentId: 'id3',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  }
}

const evtListeners = {
}

const behaviors = []

const properties = {
  text: {
    type: String,
    value: "标题内容"
  },
  color: {
    type: String,
    value: "#000"
  },
  level: {
    type: String,
    value: "1"
  },
  justify: {
    type: String,
    value: "center"
  },
}

const events = [
]

const handler = {
}

const dataBinds = {
  id3: { 
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id3.style, ...({ justifyContent: $comp.props.data.justify })})
    ); },
  },
  id2: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.text
    ); },
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.computed.level, widgetProps.id2.classList)
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id2.style, ...({ color: $comp.props.data.color })})
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Title', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
