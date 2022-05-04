import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlergetStyle from './lowcode/handler/getStyle' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id1: {
    style: {},
    classList: [ 'lcap-col' ],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id2: {
    style: {},
    classList: [],
    name: 'default',
    _parentId: 'id1',
    _order: 0,
    widgetType: 'gsd-h5-react:Slot'
  }
}

const evtListeners = {
  onid1$tap: [
    {
      key: '',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.tap({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  gutter: {
    type: Number,
    value: 20
  },
  default: {
    type: String,
    value: ""
  },
  gutterY: {
    type: Number,
    value: 20
  },
  classNameType: {
    type: String,
    value: "col-12"
  },
}

const events = [
  {name: "tap", },
]

const handler = {
  getStyle: _handlergetStyle, 
}

const dataBinds = {
  id1: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.classNameType, widgetProps.id1.classList)
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id1.style, ...($comp.handler.getStyle())})
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Col', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
