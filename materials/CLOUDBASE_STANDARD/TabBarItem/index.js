import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handleronClick from './lowcode/handler/onClick' 
import _handlergetTitleStyle from './lowcode/handler/getTitleStyle' 
import _handlergetCircleStyle from './lowcode/handler/getCircleStyle' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id1: {
    style: {},
    classList: [ 'lcap-tabbar-item' ],
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
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id3: {
    style: {},
    classList: [ 'lcap-tabbar-item--circle' ],
    title: '',
    _parentId: 'id2',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id6: {
    style: {},
    classList: [],
    _parentId: 'id3',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id7: {
    style: {},
    classList: [],
    name: 'costomIcon',
    _parentId: 'id3',
    _order: 2,
    widgetType: 'gsd-h5-react:Slot'
  },
  id4: {
    style: {},
    classList: [ 'lcap-tabbar-item__title' ],
    title: '',
    _parentId: 'id1',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id8: {
    style: {},
    classList: [],
    level: '0',
    space: '',
    decode: false,
    maxLines: 2,
    textAlign: 'left',
    selectable: false,
    userSelect: true,
    _parentId: 'id4',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id5: {
    style: {},
    classList: [ 'lcap-tabbar-item__underline' ],
    title: '',
    _parentId: 'id1',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id10: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id1',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id11: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id10',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id13: {
    style: {},
    classList: [ 'lcap-tabbar__icon-box' ],
    title: '',
    _parentId: 'id11',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id15: {
    style: {},
    classList: [],
    _parentId: 'id13',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id14: {
    style: {},
    classList: [],
    name: 'activeIcon',
    _parentId: 'id11',
    _order: 2,
    widgetType: 'gsd-h5-react:Slot'
  },
  id12: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id10',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id17: {
    style: {},
    classList: [ 'lcap-tabbar-item__icon' ],
    title: '',
    _parentId: 'id12',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id18: {
    style: {},
    classList: [],
    _parentId: 'id17',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id19: {
    style: {},
    classList: [],
    name: 'custonIcon',
    _parentId: 'id12',
    _order: 2,
    widgetType: 'gsd-h5-react:Slot'
  }
}

const evtListeners = {
  onid1$tap: [
    {
      key: '',
      handler:  _handleronClick ,
      data: { target: '' },
      boundData: {}
    },
  ],
}

const behaviors = []

const properties = {
  icon: {
    type: String,
    value: "https://imgcache.qq.com/qcloud/tcloud_dtc/static/low_code/c868cd77-8454-46d5-bd13-54539707e9f2.svg"
  },
  name: {
    type: String,
    value: "name"
  },
  color: {
    type: String,
    value: "#444444"
  },
  title: {
    type: String,
    value: "标题"
  },
  circle: {
    type: Boolean,
    value: false
  },
  actived: {
    type: Boolean,
    value: false
  },
  iconFont: {
    type: String,
    value: "custom"
  },
  textSize: {
    type: Number,
    value: 24
  },
  underline: {
    type: Boolean,
    value: false
  },
  activeIcon: {
    type: String,
    
  },
  circleSize: {
    type: Number,
    value: 100
  },
  costomIcon: {
    type: String,
    
  },
  layoutType: {
    type: String,
    value: "iconText"
  },
  activeColor: {
    type: String,
    value: "#006EFF"
  },
  childIconSize: {
    type: Number,
    value: 40
  },
}

const events = [
  {name: "click", },
]

const handler = {
  onClick: _handleronClick, 
  getTitleStyle: _handlergetTitleStyle, 
  getCircleStyle: _handlergetCircleStyle, 
}

const dataBinds = {
  id2: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.circle
    ); },
  },
  id3: { 
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id3.style, ...($comp.handler.getCircleStyle())})
    ); },
  },
  id6: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.iconFont&&$comp.props.data.iconFont!='custom'?"":$comp.props.data.icon
    ); },
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.iconFont
    ); },
    size: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.childIconSize
    ); },
    color: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.actived?$comp.props.data.activeColor:$comp.props.data.color
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.icon||$comp.props.data.iconFont
    ); },
  },
  id7: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.icon
    ); },
  },
  id4: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title&&$comp.props.data.layoutType!='icon'
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id4.style, ...($comp.handler.getTitleStyle())})
    ); },
  },
  id8: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title
    ); },
    textColor: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.actived?$comp.props.data.activeColor:$comp.props.data.color
    ); },
  },
  id5: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.underline && $comp.props.data.actived
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id5.style, ...($comp.props.data.activeColor?{'border-color':$comp.props.data.activeColor}:{})})
    ); },
  },
  id10: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.circle&&$comp.props.data.layoutType!='text'
    ); },
  },
  id11: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.actived
    ); },
  },
  id13: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.icon||$comp.props.data.iconFont
    ); },
  },
  id15: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.iconFont&&$comp.props.data.iconFont!='custom'?"":$comp.props.data.icon
    ); },
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.iconFont
    ); },
    size: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.childIconSize
    ); },
    color: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.activeColor
    ); },
  },
  id14: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.icon
    ); },
  },
  id12: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.actived
    ); },
  },
  id17: { 
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id17.style, ...({height: `${$comp.props.data.childIconSize}px`})})
    ); },
  },
  id18: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.iconFont&&$comp.props.data.iconFont!='custom'?"":$comp.props.data.icon
    ); },
    name: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.iconFont
    ); },
    size: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.childIconSize
    ); },
    color: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.color
    ); },
  },
  id19: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.icon
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:TabBarItem', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
