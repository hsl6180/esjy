import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlergetColClass from './lowcode/handler/getColClass' 
import _handlergetColVisible from './lowcode/handler/getColVisible' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id60: {
    style: {},
    classList: [ 'lcap-grid-layout' ],
    title: '',
    _parentId: undefined,
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id61: {
    style: {},
    classList: [],
    child: '',
    reverse: false,
    disabled: undefined,
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    _parentId: 'id60',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Row'
  },
  id62: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id74: {
    style: {},
    classList: [],
    name: 'slot0',
    _parentId: 'id62',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id63: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id75: {
    style: {},
    classList: [],
    name: 'slot1',
    _parentId: 'id63',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id64: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id76: {
    style: {},
    classList: [],
    name: 'slot2',
    _parentId: 'id64',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id65: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id77: {
    style: {},
    classList: [],
    name: 'slot3',
    _parentId: 'id65',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id66: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id78: {
    style: {},
    classList: [],
    name: 'slot4',
    _parentId: 'id66',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id67: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id79: {
    style: {},
    classList: [],
    name: 'slot5',
    _parentId: 'id67',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id68: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id80: {
    style: {},
    classList: [],
    name: 'slot6',
    _parentId: 'id68',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id69: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id81: {
    style: {},
    classList: [],
    name: 'slot7',
    _parentId: 'id69',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id70: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id82: {
    style: {},
    classList: [],
    name: 'slot8',
    _parentId: 'id70',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id71: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id83: {
    style: {},
    classList: [],
    name: 'slot9',
    _parentId: 'id71',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id72: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id84: {
    style: {},
    classList: [],
    name: 'slot10',
    _parentId: 'id72',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id73: {
    style: {},
    classList: [],
    default: '',
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Col'
  },
  id85: {
    style: {},
    classList: [],
    name: 'slot11',
    _parentId: 'id73',
    _order: 0,
    widgetType: 'gsd-h5-react:Slot'
  }
}

const evtListeners = {
}

const behaviors = []

const properties = {
  slot0: {
    type: String,
    value: ""
  },
  slot1: {
    type: String,
    value: ""
  },
  slot2: {
    type: String,
    value: ""
  },
  slot3: {
    type: String,
    value: ""
  },
  slot4: {
    type: String,
    value: ""
  },
  slot5: {
    type: String,
    value: ""
  },
  slot6: {
    type: String,
    value: ""
  },
  slot7: {
    type: String,
    value: ""
  },
  slot8: {
    type: String,
    value: ""
  },
  slot9: {
    type: String,
    value: ""
  },
  gutter: {
    type: Number,
    value: 20
  },
  slot10: {
    type: String,
    value: ""
  },
  slot11: {
    type: String,
    value: ""
  },
  rowGutter: {
    type: Number,
    value: 20
  },
  columnRatio: {
    type: String,
    value: "3:3:3:3"
  },
  mobileLayout: {
    type: String,
    value: "horizontal"
  },
}

const events = [
]

const handler = {
  getColClass: _handlergetColClass, 
  getColVisible: _handlergetColVisible, 
}

const dataBinds = {
  id61: { 
    col: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      ($comp.props.data.mobileLayout==='vertical' && (app.platform === 'MP' || window.innerWidth < 1024) )
    ); },
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
  },
  id62: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(0)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(0)
    ); },
  },
  id63: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(1)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(1)
    ); },
  },
  id64: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(2)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(2)
    ); },
  },
  id65: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(3)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(3)
    ); },
  },
  id66: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(4)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(4)
    ); },
  },
  id67: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(5)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(5)
    ); },
  },
  id68: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(6)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(6)
    ); },
  },
  id69: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(7)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(7)
    ); },
  },
  id70: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(8)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(8)
    ); },
  },
  id71: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(9)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(9)
    ); },
  },
  id72: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(10)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(10)
    ); },
  },
  id73: { 
    gutter: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.gutter
    ); },
    gutterY: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.rowGutter
    ); },
    classNameType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColClass(11)
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.handler.getColVisible(11)
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:GridLayout', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
