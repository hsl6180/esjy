import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlergetTabbarStyle from './lowcode/handler/getTabbarStyle' 
import _handleronTabItemClick from './lowcode/handler/onTabItemClick' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id2: {
    style: {},
    classList: [ 'lcap-tabbar' ],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id4: {
    style: {},
    classList: [],
    circle: false,
    textSize: 24,
    underline: false,
    activeIcon: '',
    circleSize: 100,
    costomIcon: '',
    _parentId: 'id2',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:TabBarItem'
  },
  id5: {
    style: {},
    classList: [],
    disabled: undefined,
    _parentId: 'id4',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  }
}

const evtListeners = {
  onid4$click: [
    {
      key: '',
      handler:  _handleronTabItemClick ,
      data: {},
      boundData: {'target':($comp, lists, forItems, event, $context) => {const $for=forItems;return (
        forItems.id4.name
      )},
        }
    },
  ],
}

const behaviors = []

const properties = {
  tabs: {
    type: Array,
    value: [{"name":"","title":"标题1","iconFont":"td:control-platform","activeIcon":"https://imgcache.qq.com/qcloud/tcloud_dtc/static/low_code/ad23c89d-e318-4f1c-b336-c818ca8dc3cc.svg"},{"name":"","title":"标题2","iconFont":"td:control-platform","activeIcon":"https://imgcache.qq.com/qcloud/tcloud_dtc/static/low_code/a4de8c70-92cb-4a8d-a173-d77f29be8495.svg"}]
  },
  color: {
    type: String,
    value: "#444444"
  },
  route: {
    type: Boolean,
    value: false
  },
  value: {
    type: String,
    value: ""
  },
  tabbar: {
    type: String,
    value: ""
  },
  iconSize: {
    type: Number,
    value: 40
  },
  position: {
    type: String,
    value: "bottom"
  },
  routeType: {
    type: String,
    value: "redirectTo"
  },
  layoutType: {
    type: String,
    value: "iconText"
  },
  activeColor: {
    type: String,
    value: "#006EFF"
  },
  backgroundType: {
    type: String,
    value: "color"
  },
  backgroundColor: {
    type: String,
    value: "#FFF"
  },
  backgroundImage: {
    type: String,
    value: ""
  },
}

const events = [
  {name: "change", },
]

const handler = {
  getTabbarStyle: _handlergetTabbarStyle, 
  onTabItemClick: _handleronTabItemClick, 
}

const dataBinds = {
  id2: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.position, widgetProps.id2.classList)
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id2.style, ...($comp.handler.getTabbarStyle())})
    ); },
  },
  id4: { 
    icon: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      forItems.id4.name === $comp.props.data.value ? '':forItems.id4.icon
    ); },
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      forItems.id4.name
    ); },
    color: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.color
    ); },
    title: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      forItems.id4.title
    ); },
    actived: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      forItems.id4.name === $comp.props.data.value
    ); },
    iconFont: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      forItems.id4.iconFont
    ); },
    layoutType: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.layoutType
    ); },
    activeColor: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.activeColor
    ); },
    childIconSize: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.iconSize
    ); },
    _waFor: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.tabs
    ); },
  },
  id5: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      forItems.id4.activeIcon
    ); },
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      forItems.id4.iconFont
    ); },
    size: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.iconSize
    ); },
    color: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.value === forItems.id4.name ? $comp.props.data.activeColor:$comp.props.data.color
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !!forItems.id4.icon && forItems.id4.iconFont === 'custom'
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:TabBar', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
