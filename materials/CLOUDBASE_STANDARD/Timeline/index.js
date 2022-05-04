import { observable } from 'mobx';
import { createComponent } from '../../../common/weapp-component'
import { concatClassList, px2rpx } from '../../../common/style'
import app from '../../../common/weapp-sdk'
import index from './lowcode/index'
import lifeCycle from './lowcode/lifecycle'
import stateFn from './lowcode/state'
import computedFuncs from './lowcode/computed'

import _handleronClick from './lowcode/handler/onClick' 
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
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id72: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id1',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id33: {
    style: {},
    classList: [ 'gsd-h5-react-busi-com-content-crosswise' ],
    title: '',
    _parentId: 'id72',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id10: {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    classList: [],
    title: '',
    _parentId: 'id33',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id12: {
    style: { width: '100%' },
    classList: [],
    title: '',
    _parentId: 'id10',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id5: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id12',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id17: {
    style: {},
    classList: [ 'gsd-h5-react-busi-text-content-crosswise' ],
    title: '',
    _parentId: 'id5',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id16: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-title-text' ],
    space: false,
    disabled: undefined,
    maxLines: 10,
    userSelect: true,
    _parentId: 'id17',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id18: {
    style: {},
    classList: [ 'gsd-h5-react-busi-text-content-crosswise' ],
    title: '',
    _parentId: 'id5',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id13: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'gsd-h5-react-busi-point-des-text' ],
    space: false,
    disabled: undefined,
    maxLines: 10,
    userSelect: true,
    _parentId: 'id18',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id20: {
    style: {},
    classList: [ 'gsd-h5-react-busi-text-content-crosswise' ],
    title: '',
    _parentId: 'id5',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id15: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'gsd-h5-react-busi-point-remark-text' ],
    space: false,
    disabled: undefined,
    maxLines: 20,
    userSelect: true,
    _parentId: 'id20',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id19: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-unit-content-crosswise' ],
    title: '',
    _parentId: 'id12',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id11: {
    style: { width: '100%' },
    classList: [ 'gsd-h5-react-busi-point-devider-crosswise' ],
    title: '',
    _parentId: 'id19',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id21: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id19',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id4: {
    style: {},
    classList: [],
    name: 'success',
    size: 48,
    color: '',
    disabled: undefined,
    _parentId: 'id21',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id70: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-solid-content' ],
    title: '',
    _parentId: 'id21',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id28: {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row'
    },
    classList: [ 'gsd-h5-react-busi-point-unit-content-crosswise' ],
    title: '',
    _parentId: 'id12',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id29: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id28',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id31: {
    style: {},
    classList: [],
    name: 'success',
    size: 48,
    color: '',
    disabled: undefined,
    _parentId: 'id29',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id63: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-solid-content' ],
    title: '',
    _parentId: 'id29',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id30: {
    style: { width: '100%' },
    classList: [ 'gsd-h5-react-busi-point-devider-crosswise' ],
    title: '',
    _parentId: 'id28',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id59: {
    style: {
      height: '68rpx',
      marginLeft: '8rpx',
      display: 'flex',
      alignItems: 'flex-end',
      flexWrap: 'nowrap'
    },
    classList: [],
    title: '',
    _parentId: 'id12',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id60: {
    style: { bottom: '0rpx', whiteSpace: 'pre-line' },
    classList: [ 'gsd-h5-react-busi-point-remark-text' ],
    space: false,
    disabled: undefined,
    maxLines: 10,
    userSelect: true,
    _parentId: 'id59',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id37: {
    style: {},
    classList: [ 'gsd-h5-react-busi-text-content' ],
    title: '',
    _parentId: 'id72',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id40: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id37',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id41: {
    style: { display: 'flex' },
    classList: [],
    title: '',
    _parentId: 'id40',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id42: {
    style: { marginTop: '10rpx' },
    classList: [ 'gsd-h5-react-busi-point-unit-content-lengthways' ],
    title: '',
    disabled: undefined,
    _parentId: 'id41',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id45: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id42',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id47: {
    style: {},
    classList: [],
    name: 'success',
    size: 48,
    color: '',
    disabled: undefined,
    _parentId: 'id45',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id69: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-solid-content' ],
    title: '',
    _parentId: 'id45',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id46: {
    style: { height: '100%' },
    classList: [ '.gsd-h5-react-busi-point-devider' ],
    title: '',
    _parentId: 'id42',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id48: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-devider-lengthways' ],
    _parentId: 'id46',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id43: {
    style: { marginBottom: '40rpx' },
    classList: [],
    title: '',
    _parentId: 'id41',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id49: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id43',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id52: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'gsd-h5-react-busi-point-title-text' ],
    space: false,
    disabled: undefined,
    maxLines: 10,
    userSelect: true,
    _parentId: 'id49',
    _order: undefined,
    widgetType: 'gsd-h5-react:Text'
  },
  id50: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id43',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id53: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'gsd-h5-react-busi-point-des-text' ],
    space: false,
    disabled: undefined,
    maxLines: 10,
    userSelect: true,
    _parentId: 'id50',
    _order: undefined,
    widgetType: 'gsd-h5-react:Text'
  },
  id51: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id43',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id54: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'gsd-h5-react-busi-point-remark-text' ],
    space: false,
    disabled: undefined,
    maxLines: 10,
    userSelect: true,
    _parentId: 'id51',
    _order: undefined,
    widgetType: 'gsd-h5-react:Text'
  },
  id44: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-unit-content-lengthways' ],
    title: '',
    _parentId: 'id41',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id55: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id44',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id57: {
    style: {},
    classList: [],
    name: 'success',
    size: 48,
    color: '',
    disabled: undefined,
    _parentId: 'id55',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id71: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-solid-content' ],
    title: '',
    _parentId: 'id55',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id56: {
    style: { height: '100%' },
    classList: [],
    title: '',
    _parentId: 'id44',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id58: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-devider-lengthways' ],
    _parentId: 'id56',
    _order: undefined,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id61: {
    style: {},
    classList: [ 'gsd-h5-react-busi-lengthways-side-remark' ],
    title: '',
    _parentId: 'id41',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id62: {
    style: {},
    classList: [ 'gsd-h5-react-busi-point-remark-text' ],
    space: false,
    disabled: undefined,
    maxLines: 10,
    userSelect: true,
    _parentId: 'id61',
    _order: undefined,
    widgetType: 'gsd-h5-react:Text'
  }
}

const evtListeners = {
  onid10$tap: [
    {
      key: 'wafovn8gl8c',
      handler:  _handleronClick ,
      data: {},
      boundData: {'target':($comp, lists, forItems, event, $context) => {const $for=forItems;return (
        forItems.id10
      )},
        }
    },
  ],
  onid40$tap: [
    {
      key: 'wa4bf5c7emmg',
      handler:  _handleronClick ,
      data: {},
      boundData: {'target':($comp, lists, forItems, event, $context) => {const $for=forItems;return (
        forItems.id40
      )},
        }
    },
  ],
}

const behaviors = []

const properties = {
  showList: {
    type: Array,
    value: [{"_id":"1","icon":"https://main.qcloudimg.com/raw/b3e6c13b81d2844571973efa44233ba6.png","title":"已签收","remark":"2021/09/07  12:23:45","hightLight":false,"description":"已签收，欢迎再次选购"},{"_id":"2","icon":"https://main.qcloudimg.com/raw/b3e6c13b81d2844571973efa44233ba6.png","title":"运输中","remark":"2021/09/07  12:23:45","hightLight":false,"description":"快件已到达深圳中转站"},{"_id":"3","icon":"https://main.qcloudimg.com/raw/b3e6c13b81d2844571973efa44233ba6.png","title":"已发货","remark":"2021/09/07  12:23:45","hightLight":false,"description":"商家已发货，物流承运商：顺丰速运"},{"_id":"4","icon":"https://main.qcloudimg.com/raw/32ed1a4f7c5987f49ae8271c2dc38ed3.png","title":"订单已付款","remark":"2021/09/07  12:23:45","hightLight":true,"pointColor":"#0052D9","description":"订单已付款，支付方式：微信支付"}]
  },
  iconValue: {
    type: String,
    value: "icon"
  },
  pointType: {
    type: String,
    value: "solidType"
  },
  titleValue: {
    type: String,
    value: "title"
  },
  acceptTypes: {
    type: String,
    value: "lengthwaysTextLeft"
  },
  remarkValue: {
    type: String,
    value: "remark"
  },
  pointIdValue: {
    type: String,
    value: "_id"
  },
  titleFontSize: {
    type: Number,
    value: 28
  },
  remarkFontSize: {
    type: Number,
    value: 24
  },
  titleFontColor: {
    type: String,
    value: "#0052D9"
  },
  remarkFontColor: {
    type: String,
    value: "rgba(0,0,0,0.4)"
  },
  descriptionValue: {
    type: String,
    value: "description"
  },
  descriptionFontSize: {
    type: Number,
    value: 24
  },
  descriptionFontColor: {
    type: String,
    value: "rgba(0,0,0,0.6)"
  },
}

const events = [
  {name: "onClick", },
]

const handler = {
  onClick: _handleronClick, 
}

const dataBinds = {
  id72: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.showList!=undefined
    ); },
  },
  id33: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=='crosswiseTextTop'|| $comp.props.data.acceptTypes=='crosswiseTextDown' || $comp.props.data.acceptTypes=='crosswiseTextSide'
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id33.style, ...($comp.props.data.acceptTypes=='crosswiseTextTop'?{ 'align-items': 'flex-end'}:$comp.props.data.acceptTypes=='crosswiseTextDown'||$comp.props.data.acceptTypes=='crosswiseTextSide'?{ 'align-items': 'flex-start'}:'')})
    ); },
  },
  id10: { 
    _waFor: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.showList
    ); },
  },
  id16: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id10[$comp.props.data.titleValue]
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id16.style, ...($for.id10.hightLight==true?{color: $comp.props.data.titleFontColor,'font-size': $comp.props.data.titleFontSize}:'')})
    ); },
  },
  id13: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id10[$comp.props.data.descriptionValue]
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id13.style, ...($for.id10.hightLight==true?{color: $comp.props.data.descriptionFontColor,'font-size': $comp.props.data.descriptionFontSize}:'')})
    ); },
  },
  id20: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=='crosswiseTextTop'|| $comp.props.data.acceptTypes=='crosswiseTextDown'
    ); },
  },
  id15: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id10[$comp.props.data.remarkValue]
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id15.style, ...($for.id10.hightLight==true?{color: $comp.props.data.remarkFontColor,'font-size': $comp.props.data.remarkFontSize}:'')})
    ); },
  },
  id19: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=="crosswiseTextTop"
    ); },
  },
  id11: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !($for.id10[$comp.props.data.pointIdValue]==$comp.props.data.showList[$comp.props.data.showList.length-1][$comp.props.data.pointIdValue])
    ); },
  },
  id4: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id10[$comp.props.data.iconValue]
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !($comp.props.data.pointType=='solidType'||$comp.props.data.pointType=='outlineType')
    ); },
  },
  id70: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.pointType=='solidType'||$comp.props.data.pointType=='outlineType'
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id70.style, ...($comp.props.data.pointType=='solidType'?{background: $for.id10.pointColor?$for.id10.pointColor:'#C5C5C5','border-color': $for.id10.pointColor?$for.id10.pointColor:'#C5C5C5'}:{"border-color": $for.id10.pointColor?$for.id10.pointColor:'#C5C5C5'})})
    ); },
  },
  id28: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=="crosswiseTextDown"||$comp.props.data.acceptTypes=="crosswiseTextSide"
    ); },
  },
  id31: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id10[$comp.props.data.iconValue]
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !($comp.props.data.pointType=='solidType'||$comp.props.data.pointType=='outlineType')
    ); },
  },
  id63: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.pointType=='solidType'||$comp.props.data.pointType=='outlineType'
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id63.style, ...($comp.props.data.pointType=='solidType'?{background: $for.id10.pointColor?$for.id10.pointColor:'#C5C5C5','border-color': $for.id10.pointColor?$for.id10.pointColor:'#C5C5C5'}:{"border-color": $for.id10.pointColor?$for.id10.pointColor:'#C5C5C5'})})
    ); },
  },
  id30: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !($for.id10[$comp.props.data.pointIdValue]==$comp.props.data.showList[$comp.props.data.showList.length-1][$comp.props.data.pointIdValue])
    ); },
  },
  id59: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=="crosswiseTextSide"
    ); },
  },
  id60: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id10[$comp.props.data.remarkValue]
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id60.style, ...($for.id10.hightLight==true?{color: $comp.props.data.remarkFontColor,'font-size': $comp.props.data.remarkFontSize}:'')})
    ); },
  },
  id37: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=="lengthwaysTextRight"||$comp.props.data.acceptTypes=="lengthwaysTextLeft"||$comp.props.data.acceptTypes=="lengthwaysTextSide"
    ); },
  },
  id40: { 
    _waFor: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.showList
    ); },
  },
  id41: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.acceptTypes=="lengthwaysTextLeft"?'gsd-h5-react-busi-lengthways-left-content-show':``, widgetProps.id41.classList)
    ); },
  },
  id42: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=="lengthwaysTextRight"||$comp.props.data.acceptTypes=="lengthwaysTextSide"
    ); },
  },
  id47: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id40[$comp.props.data.iconValue]
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !($comp.props.data.pointType=='solidType'||$comp.props.data.pointType=='outlineType')
    ); },
  },
  id69: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.pointType=='solidType'||$comp.props.data.pointType=='outlineType'
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id69.style, ...($comp.props.data.pointType=='solidType'?{background: $for.id40.pointColor?$for.id40.pointColor:'#C5C5C5','border-color': $for.id40.pointColor?$for.id40.pointColor:'#C5C5C5'}:{"border-color": $for.id40.pointColor?$for.id40.pointColor:'#C5C5C5'})})
    ); },
  },
  id46: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !($for.id40[$comp.props.data.pointIdValue]==$comp.props.data.showList[$comp.props.data.showList.length-1][$comp.props.data.pointIdValue])
    ); },
  },
  id43: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.acceptTypes=="lengthwaysTextSide"?`gsd-h5-react-busi-lengthways-side-content-show`:``, widgetProps.id43.classList)
    ); },
  },
  id49: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.acceptTypes=="lengthwaysTextLeft"||$comp.props.data.acceptTypesMP=="lengthwaysTextLeft"?'gsd-h5-react-busi-lengthways-left-content-title':``, widgetProps.id49.classList)
    ); },
  },
  id52: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id40[$comp.props.data.titleValue]
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id52.style, ...($for.id40.hightLight==true?{color: $comp.props.data.titleFontColor,'font-size': $comp.props.data.titleFontSize}:'')})
    ); },
  },
  id50: { 
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.acceptTypes=="lengthwaysTextLeft"||$comp.props.data.acceptTypesMP=="lengthwaysTextLeft"?'gsd-h5-react-busi-lengthways-left-content-title':``, widgetProps.id50.classList)
    ); },
  },
  id53: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id40[$comp.props.data.descriptionValue]
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id53.style, ...($for.id40.hightLight==true?{color: $comp.props.data.descriptionFontColor,'font-size': $comp.props.data.descriptionFontSize}:'')})
    ); },
  },
  id51: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=="lengthwaysTextRight"||$comp.props.data.acceptTypes=="lengthwaysTextLeft"
    ); },
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.acceptTypes=="lengthwaysTextLeft"?'gsd-h5-react-busi-lengthways-left-content-title':``, widgetProps.id51.classList)
    ); },
  },
  id54: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id40[$comp.props.data.remarkValue]
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id54.style, ...($for.id40.hightLight==true?{color: $comp.props.data.remarkFontColor,'font-size': $comp.props.data.remarkFontSize}:'')})
    ); },
  },
  id44: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=="lengthwaysTextLeft"
    ); },
  },
  id57: { 
    src: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id40[$comp.props.data.iconValue]
    ); },
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !($comp.props.data.pointType=='solidType'||$comp.props.data.pointType=='outlineType')
    ); },
  },
  id71: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.pointType=='solidType'||$comp.props.data.pointType=='outlineType'
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id71.style, ...($comp.props.data.pointType=='solidType'?{background: $for.id40.pointColor?$for.id40.pointColor:'#C5C5C5','border-color': $for.id40.pointColor?$for.id40.pointColor:'#C5C5C5'}:{"border-color": $for.id40.pointColor?$for.id40.pointColor:'#C5C5C5'})})
    ); },
  },
  id56: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      !($for.id40[$comp.props.data.pointIdValue]==$comp.props.data.showList[$comp.props.data.showList.length-1][$comp.props.data.pointIdValue])
    ); },
  },
  id61: { 
    _waIf: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $comp.props.data.acceptTypes=="lengthwaysTextSide"
    ); },
    classList: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      concatClassList($comp.props.data.acceptTypes=="lengthwaysTextLeft"||$comp.props.data.acceptTypesMP=="lengthwaysTextLeft"?`gsd-h5-react-busi-content-title`:``, widgetProps.id61.classList)
    ); },
  },
  id62: { 
    text: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      $for.id40[$comp.props.data.remarkValue]
    ); },
    style: function ($comp, lists, forItems, event, $context) {const $for=forItems; return (
      px2rpx({...widgetProps.id62.style, ...($for.id40.hightLight==true?{color: $comp.props.data.remarkFontColor,'font-size': $comp.props.data.remarkFontSize}:'')})
    ); },
  },
}

const config = {}

createComponent('CLOUDBASE_STANDARD:Timeline', behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps,
 index, lifeCycle, stateFn, computedFuncs, config, { const: constObj, tools: toolsObj }, libCode, context)
