import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlergetWrapperClassName from './lowcode/handler/getWrapperClassName' 
import _handleronTapListItem from './lowcode/handler/onTapListItem' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id1: {
    style: {},
    classList: [ 'lcap-item' ],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id2: {
    style: {},
    classList: [ 'lcap-slot' ],
    name: 'customIcon',
    _parentId: 'id1',
    _order: 0,
    widgetType: 'gsd-h5-react:Slot'
  },
  id3: {
    style: {},
    classList: [ 'lcap-item__body' ],
    title: '',
    _parentId: 'id1',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id4: {
    style: {},
    classList: [ 'lcap-item__title' ],
    title: '',
    _parentId: 'id3',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id8: {
    style: {},
    classList: [],
    space: '',
    decode: false,
    maxLines: 2,
    selectable: false,
    userSelect: true,
    _parentId: 'id4',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id5: {
    style: {},
    classList: [ 'lcap-item__description' ],
    title: '',
    _parentId: 'id3',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id9: {
    style: {},
    classList: [],
    decode: false,
    selectable: false,
    _parentId: 'id5',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id6: {
    style: {},
    classList: [],
    name: 'customTitle',
    _parentId: 'id3',
    _order: 3,
    widgetType: 'gsd-h5-react:Slot'
  },
  id7: {
    style: {},
    classList: [ 'lcap-item__value' ],
    title: '',
    _parentId: 'id1',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id10: {
    style: {},
    classList: [ 'lcap-item__value-text' ],
    title: '',
    _parentId: 'id7',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id11: {
    style: {},
    classList: [],
    decode: false,
    selectable: false,
    _parentId: 'id10',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id12: {
    style: {},
    classList: [],
    name: 'customValue',
    _parentId: 'id7',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id13: {
    style: {},
    classList: [ 'lcap-item__detail-icon--vertical', 'lcap-item__right-icon' ],
    src: '',
    name: 'chevronright',
    size: 48,
    color: '#888',
    _parentId: 'id1',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  }
}

const evtListeners = {
  onid1$tap: [
    {
      key: '',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.click({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  title: {
    type: String,
    value: "标题"
  },
  value: {
    type: String,
    value: "右侧内容"
  },
  detail: {
    type: Boolean,
    value: true
  },
  bordered: {
    type: Boolean,
    value: true
  },
  customIcon: {
    type: String,
    value: ""
  },
  titleWidth: {
    type: String,
    value: "auto"
  },
  customTitle: {
    type: String,
    value: ""
  },
  customValue: {
    type: String,
    value: ""
  },
  description: {
    type: String,
    value: "标题下描述"
  },
  isClickable: {
    type: Boolean,
    value: false
  },
  borderPosition: {
    type: String,
    value: "bottom"
  },
}

const events = [
  {name: "click", },
]

const handler = {
  getWrapperClassName: _handlergetWrapperClassName, 
  onTapListItem: _handleronTapListItem, 
}

const dataBinds = {
  id1: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.handler.getWrapperClassName(), widgetProps.id1.classList)
    ); },
  },
  id3: { 
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id3.style, ...($comp.props.data.titleWidth? {minWidth:$comp.props.data.titleWidth,maxWidth:$comp.props.data.titleWidth}:{})})
    ); },
  },
  id4: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title
    ); },
  },
  id8: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title
    ); },
  },
  id5: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.description
    ); },
  },
  id9: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.description
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.description
    ); },
  },
  id10: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.value
    ); },
  },
  id11: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.value
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.value
    ); },
  },
  id13: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.detail
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Item', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
