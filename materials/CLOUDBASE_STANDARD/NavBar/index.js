import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlergetNavigationbarStyle from './lowcode/handler/getNavigationbarStyle' 
import _handlergetTitleBarStartStyle from './lowcode/handler/getTitleBarStartStyle' 
import _handlergetSystemInfo from './lowcode/handler/getSystemInfo' 
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
  id2: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id1',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id3: {
    style: {},
    classList: [ 'lcap-navbar' ],
    title: '',
    _parentId: 'id1',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id4: {
    style: {},
    classList: [ 'lcap-navbar__statusbar' ],
    title: '',
    _parentId: 'id3',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id5: {
    style: {},
    classList: [ 'lcap-navbar__titlebar' ],
    title: '',
    _parentId: 'id3',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id6: {
    style: {},
    classList: [ 'lcap-navbar__start' ],
    title: '',
    _parentId: 'id5',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id9: {
    style: {},
    classList: [ 'lcap-navbar__action', 'lcap-navbar__action-goback' ],
    title: '',
    _parentId: 'id6',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id10: {
    style: {},
    classList: [ 'lcap-navbar__action', 'lcap-navbar__action-gohome' ],
    title: '',
    _parentId: 'id6',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id11: {
    style: {},
    classList: [ 'lcap-navbar__actions' ],
    title: '',
    _parentId: 'id6',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id13: {
    style: {},
    classList: [ 'lcap-navbar__action', 'lcap-navbar__action-goback' ],
    title: '',
    _parentId: 'id11',
    _order: undefined,
    widgetType: 'gsd-h5-react:Container'
  },
  id14: {
    style: {},
    classList: [ 'lcap-navbar__action', 'lcap-navbar__action-gohome' ],
    title: '',
    _parentId: 'id11',
    _order: undefined,
    widgetType: 'gsd-h5-react:Container'
  },
  id12: {
    style: {},
    classList: [],
    name: 'start',
    _parentId: 'id6',
    _order: 4,
    widgetType: 'gsd-h5-react:Slot'
  },
  id7: {
    style: {},
    classList: [ 'lcap-navbar__center' ],
    title: '',
    _parentId: 'id5',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id15: {
    style: {},
    classList: [ 'lcap-navbar__title' ],
    level: '0',
    space: '',
    decode: false,
    maxLines: 2,
    textAlign: 'left',
    selectable: false,
    userSelect: true,
    _parentId: 'id7',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id16: {
    style: {},
    classList: [],
    name: 'center',
    _parentId: 'id7',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  },
  id8: {
    style: {},
    classList: [ 'lcap-navbar__end' ],
    title: '',
    _parentId: 'id5',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id17: {
    style: {},
    classList: [],
    name: 'end',
    _parentId: 'id8',
    _order: 1,
    widgetType: 'gsd-h5-react:Slot'
  }
}

const evtListeners = {
  onid9$tap: [
    {
      key: '',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.back({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid10$tap: [
    {
      key: '',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.home({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid13$tap: [
    {
      key: '',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.back({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
  onid14$tap: [
    {
      key: '',
      handler:  function({event, data = {}}){ return this.$WEAPPS_COMP.props.events.home({...event.detail, ...data}) } ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  end: {
    type: String,
    value: ""
  },
  back: {
    type: Boolean,
    value: true
  },
  home: {
    type: Boolean,
    value: true
  },
  mode: {
    type: String,
    value: "default"
  },
  start: {
    type: String,
    value: ""
  },
  title: {
    type: String,
    value: "导航标题"
  },
  center: {
    type: String,
    value: ""
  },
  textSize: {
    type: Number,
    value: 28
  },
  iconTheme: {
    type: String,
    value: "black"
  },
  textColor: {
    type: String,
    value: "rgba(0, 0, 0, 1)"
  },
  backgroundColor: {
    type: String,
    value: "rgba(255, 255, 255, 1)"
  },
}

const events = [
  {name: "back", },
  {name: "home", },
]

const handler = {
  getNavigationbarStyle: _handlergetNavigationbarStyle, 
  getTitleBarStartStyle: _handlergetTitleBarStartStyle, 
  getSystemInfo: _handlergetSystemInfo, 
}

const dataBinds = {
  id2: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.mode !== 'cover'
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id2.style, ...({height: `${$comp.state.navBarHeight||0}px`})})
    ); },
  },
  id3: { 
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id3.style, ...({ 'background-color': $comp.props.data.backgroundColor, height: `${$comp.state.navBarHeight||0}px` })})
    ); },
  },
  id4: { 
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id4.style, ...({height: `${$comp.state.statusBarHeight}px`})})
    ); },
  },
  id5: { 
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id5.style, ...({'height': `${$comp.state.titleBarHeight}px`, color: $comp.props.data.textColor})})
    ); },
  },
  id6: { 
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id6.style, ...($comp.handler.getTitleBarStartStyle())})
    ); },
  },
  id9: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.back && !$comp.props.data.home
    ); },
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.iconTheme, widgetProps.id9.classList)
    ); },
  },
  id10: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.back && $comp.props.data.home
    ); },
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.iconTheme, widgetProps.id10.classList)
    ); },
  },
  id11: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.back && $comp.props.data.home
    ); },
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.state.ios?'ios':'android', widgetProps.id11.classList)
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id11.style, ...({'margin-left': `${750-$comp.state.capsuleRectInfo.right}px`})})
    ); },
  },
  id13: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.iconTheme, widgetProps.id13.classList)
    ); },
  },
  id14: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.iconTheme, widgetProps.id14.classList)
    ); },
  },
  id12: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.back && !$comp.props.data.home
    ); },
  },
  id15: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title
    ); },
    textColor: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.textColor
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id15.style, ...({'font-size': `${$comp.props.data.textSize}px`})})
    ); },
  },
  id16: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.title
    ); },
  },
  id8: { 
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id8.style, ...({'width': `${($comp.state.capsuleRectInfo.width + 750 - $comp.state.capsuleRectInfo.right) / $comp.state.ratio}px`, height: `${($comp.state.capsuleRectInfo.height / $comp.state.ratio)}px`})})
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:NavBar', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
