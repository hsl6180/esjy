import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handlerconsole from './lowcode/handler/console' 
import * as constObj from '../libCommonRes/const'
import * as toolsObj from '../libCommonRes/tools'

const libCode = 'CLOUDBASE_STANDARD'
const context = observable({});

const widgetProps = {
  id1: {
    style: {},
    classList: [ 'lcap-media' ],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id4: {
    style: {},
    classList: [ 'lcap-media__right' ],
    title: '',
    _parentId: 'id1',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id5: {
    style: {},
    classList: [ 'lcap-media__title_container' ],
    title: '',
    _parentId: 'id4',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id7: {
    style: {},
    classList: [ 'lcap-media__title' ],
    decode: false,
    selectable: false,
    _parentId: 'id5',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id8: {
    style: {},
    classList: [ 'lcap-media__subtitle' ],
    decode: false,
    selectable: false,
    _parentId: 'id5',
    _order: 3,
    widgetType: 'gsd-h5-react:Text'
  },
  id6: {
    style: {},
    classList: [ 'lcap-media__content_container' ],
    title: '',
    _parentId: 'id4',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id9: {
    style: {},
    classList: [],
    decode: false,
    selectable: false,
    _parentId: 'id6',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id12: {
    style: {},
    classList: [],
    name: 'customContent',
    _parentId: 'id4',
    _order: 3,
    widgetType: 'gsd-h5-react:Slot'
  },
  id10: {
    style: {},
    classList: [ 'lcap-media__left' ],
    title: '',
    _parentId: 'id1',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id3: {
    style: {},
    classList: [ 'lcap-media__left_image' ],
    alt: '[图片]',
    mode: 'scaleToFill',
    webp: false,
    lazyLoad: false,
    showMenuByLongpress: false,
    _parentId: 'id10',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id11: {
    style: {},
    classList: [],
    name: 'customMedia',
    _parentId: 'id10',
    _order: 1,
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
  align: {
    type: String,
    value: "flex-start"
  },
  title: {
    type: String,
    value: "标题"
  },
  content: {
    type: String,
    value: "消息内容"
  },
  reverse: {
    type: Boolean,
    value: false
  },
  mediaUrl: {
    type: String,
    value: "https://main.qcloudimg.com/raw/d9fe2045658211eeb3ad60edca3102a8.png"
  },
  subtitle: {
    type: String,
    value: "子标题"
  },
  thumbSize: {
    type: Number,
    value: 100
  },
  customMedia: {
    type: String,
    value: ""
  },
  subtitleType: {
    type: String,
    value: "raw"
  },
  customContent: {
    type: String,
    value: ""
  },
  isCustomMedia: {
    type: Boolean,
    value: false
  },
  isCustomContent: {
    type: Boolean,
    value: false
  },
}

const events = [
  {name: "tap", },
]

const handler = {
  console: _handlerconsole, 
}

const dataBinds = {
  id1: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.reverse?'lcap-reverse':'', widgetProps.id1.classList)
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id1.style, ...({"align-items": props.data.align})})
    ); },
  },
  id5: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.isCustomContent
    ); },
  },
  id7: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.title
    ); },
  },
  id8: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.subtitle
    ); },
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.subtitleType, widgetProps.id8.classList)
    ); },
  },
  id6: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.content
    ); },
  },
  id9: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.content
    ); },
  },
  id12: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.isCustomContent
    ); },
  },
  id3: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.mediaUrl
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !$comp.props.data.isCustomMedia
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id3.style, ...({
    width: `${$comp.props.data.thumbSize || 0}px`,
    height: `${$comp.props.data.thumbSize || 0}px`
})})
    ); },
  },
  id11: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.isCustomMedia
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Media', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
