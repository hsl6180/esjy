import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_wo_de_shang_pin as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_wo_de_shang_pin/index'
import lifecyle from '../../lowcode/u_wo_de_shang_pin/lifecycle'
import state from '../../lowcode/u_wo_de_shang_pin/state'
import computed from '../../lowcode/u_wo_de_shang_pin/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id46: {
    style: {
      padding: '30rpx 20rpx',
      border: '3rpx solid rgb(225, 225, 225)',
      borderRadius: '5rpx',
      background: 'rgb(248, 248, 248)'
    },
    classList: [],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id48: {
    style: {
      paddingRight: '20rpx',
      paddingLeft: '20rpx',
      display: 'block',
      fontWeight: 'bolder'
    },
    classList: [],
    color: 'rgb(0, 0, 0)',
    justify: 'start',
    level: '2',
    text: '我的商品列表',
    _parentId: 'id46',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Title'
  },
  id55: {
    style: { display: 'flex', alignItems: 'center' },
    classList: [],
    title: '',
    _parentId: 'id46',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id67: {
    style: {},
    classList: [],
    appParameter: '',
    categoryId: [],
    content: '添加上架商品',
    disabled: false,
    formType: 'button',
    loading: false,
    openType: '',
    sendMessageImg: '',
    sendMessagePath: '',
    sendMessageTitle: '',
    sessionFrom: '',
    showMessageCard: false,
    size: 'large',
    type: 'primary',
    _parentId: 'id55',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Button'
  },
  id181: {
    style: {},
    classList: [],
    datasource: {
      name: 'dbdx_w3c513v',
      type: 'datamodal',
      extra: {
        params: {},
        viewId: 'view-2w8s5x5h8w',
        methodName: 'wedaGetRecords'
      }
    },
    orderBy: '',
    orderType: '',
    pageSize: 5,
    pagination: 'loadMoreButton',
    template: 'imageTextList',
    _parentId: 'id46',
    _order: 1,
    widgetType: 'gsd-h5-react:ListView'
  },
  id189: {
    style: {
      width: '100%',
      padding: '15PX 18PX 14PX 16PX',
      background: 'rgb(255, 255, 255)',
      position: 'relative',
      boxSizing: 'border-box',
      borderBottom: '1rpx dashed #acacac'
    },
    classList: [],
    _parentId: 'id181',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id190: {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      boxSizing: 'border-box'
    },
    classList: [],
    _parentId: 'id189',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id191: {
    style: { fontSize: '16PX', flex: '1', wordBreak: 'break-all' },
    classList: [],
    _parentId: 'id190',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id192: {
    style: {
      width: 'auto',
      display: '-webkit-box',
      color: 'rgba(0, 0, 0, 0.9)',
      lineHeight: '20PX',
      fontWeight: '600',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '1rpx'
    },
    classList: [],
    level: '0',
    maxLines: 1,
    space: false,
    textAlign: 'left',
    textColor: 'rgb(0, 0, 0)',
    userSelect: true,
    _parentId: 'id191',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id193: {
    style: {
      width: 'auto',
      marginTop: '12PX',
      display: '-webkit-box',
      color: 'rgba(0, 0, 0, 0.4)',
      fontSize: '12PX',
      lineHeight: '20PX',
      opacity: 0.4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '2rpx'
    },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    textAlign: 'left',
    textColor: 'rgb(0, 0, 0)',
    userSelect: true,
    _parentId: 'id191',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id194: {
    style: {
      width: '24PX',
      height: '24PX',
      marginLeft: '10PX',
      display: 'inline-block',
      lineHeight: '1rpx',
      opacity: 0.3,
      verticalAlign: 'middle'
    },
    classList: [],
    _parentId: 'id190',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id195: {
    style: {},
    classList: [],
    color: '',
    name: 'chevronright',
    size: 48,
    src: '',
    _parentId: 'id194',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id196: {
    style: {
      width: '52PX',
      height: '52PX',
      marginRight: '10PX',
      position: 'relative'
    },
    classList: [],
    _parentId: 'id190',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id197: {
    style: { width: '100%', height: '100%' },
    classList: [],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: false,
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: '',
    _parentId: 'id196',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id198: {
    style: {},
    classList: [],
    activeColor: '#006EFF',
    backgroundColor: '#FFF',
    backgroundImage: '',
    backgroundType: 'color',
    color: '#444444',
    iconSize: 40,
    layoutType: 'iconText',
    position: 'bottom',
    route: false,
    routeType: 'redirectTo',
    tabbar: '',
    tabs: [
      {
        icon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342801',
        name: 'index',
        title: '主页',
        iconFont: 'custom',
        __sortid__: '4vUtpu-Ztqy5fsvFZ_BFh',
        activeIcon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342801',
        withParams: false
      },
      {
        icon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-343484',
        name: 'u_xiao_xi',
        title: '消息',
        iconFont: 'custom',
        __sortid__: 'lZZtiVNOuAX0HLz5IQfo_',
        activeIcon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-343484',
        withParams: false
      },
      {
        icon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342803',
        name: 'mine',
        title: '我的',
        iconFont: 'custom',
        __sortid__: 'SI1tC_sIviundzUJz9cfk',
        activeIcon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342803',
        withParams: false
      }
    ],
    value: '',
    _parentId: undefined,
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:TabBar'
  }
}
/** widget event listeners **/
const evtListeners = {
  onid67$tap: [
    {
      key: 'wa1dv07agbn8',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_wo_de_shang_jia_sha', params: {} },
      boundData: {}
    },
  ],
  onid181$onDataChange: [
    {
      key: '',
      handler:  ({event})=>{
          app.utils.set(context, 'id181.data', event?.detail?.data);
        } ,
      data: {},
      boundData: {}
    },
  ],
  onid189$tap: [
    {
      key: 'wasqehld4c2g',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.wd_sp' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id189._id
      )},
        }
    },{
      key: 'wan1n59lo27g',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'wa6ps5nbr5lg', params: {} },
      boundData: {}
    },
  ],
}
const dataBinds = {
  id181: { 
    where: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      [{"groupLogic":null,"logicData":[{"key":"mjmc","rel":"equal","extra":{"id":"wahha0bffca8","type":"string","format":"","childId":null,"parentId":null,"isExpression":false},"logic":null,"value":app.dataset.state.my_name,"keyType":"field","valueType":"var-font","expression":true}]}]
    ); },
  },
  id189: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $context.id181.data
    ); },
  },
  id192: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id189.mjmc
    ); },
  },
  id193: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id189.spjg
    ); },
  },
  id197: { 
    src: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id189.sptp
    ); },
  },
}

createPage('u_wo_de_shang_pin', 'u_wo_de_shang_pin', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
