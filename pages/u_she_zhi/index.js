import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_she_zhi as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_she_zhi/index'
import lifecyle from '../../lowcode/u_she_zhi/lifecycle'
import state from '../../lowcode/u_she_zhi/state'
import computed from '../../lowcode/u_she_zhi/computed'
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
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id66: {
    style: {},
    classList: [],
    borderPosition: 'bottom',
    bordered: true,
    customIcon: '',
    customTitle: '',
    customValue: '',
    description: '',
    detail: true,
    isClickable: false,
    title: '我的收货地址',
    titleWidth: 'auto',
    value: '',
    _parentId: 'id46',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Item'
  },
  id70: {
    style: {},
    classList: [],
    borderPosition: 'bottom',
    bordered: true,
    customIcon: '',
    customTitle: '',
    customValue: '',
    description: '',
    detail: true,
    isClickable: false,
    title: '账户与安全',
    titleWidth: 'auto',
    value: '',
    _parentId: 'id46',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:Item'
  },
  id72: {
    style: {},
    classList: [],
    bordered: true,
    customIcon: '',
    customTitle: '',
    customValue: '',
    description: '',
    detail: true,
    isClickable: false,
    title: '帮助与反馈',
    titleWidth: 'auto',
    value: '',
    _parentId: 'id46',
    _order: 5,
    widgetType: 'CLOUDBASE_STANDARD:Item'
  },
  id73: {
    style: {},
    classList: [],
    _parentId: 'id46',
    _order: 4,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id74: {
    style: {},
    classList: [],
    bordered: true,
    customIcon: '',
    customTitle: '',
    customValue: '',
    description: '',
    detail: true,
    isClickable: false,
    title: '通用',
    titleWidth: 'auto',
    value: '',
    _parentId: 'id46',
    _order: 6,
    widgetType: 'CLOUDBASE_STANDARD:Item'
  },
  id77: {
    style: {},
    classList: [],
    _parentId: 'id46',
    _order: 7,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id78: {
    style: {
      height: '100rpx',
      paddingTop: '20rpx',
      fontSize: '40rpx',
      textAlign: 'center',
      background: 'rgb(255, 255, 255)',
      whiteSpace: 'pre-line'
    },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    text: '退出登录',
    userSelect: true,
    _parentId: 'id46',
    _order: 9,
    widgetType: 'gsd-h5-react:Text'
  },
  id79: {
    style: { height: '200rpx' },
    classList: [],
    _parentId: 'id46',
    _order: 8,
    widgetType: 'gsd-h5-react:Container'
  },
  id85: {
    style: {},
    classList: [],
    language: 'zh_CN',
    size: 'default',
    text: '登录',
    type: 'wechat',
    usage: '头像和昵称',
    _parentId: 'id79',
    _order: 0,
    widgetType: 'gsd-h5-react:UserInfo'
  },
  id84: {
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
  onid78$tap: [
    {
      key: 'walbhbbn7m6o',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { val: '/resources/2022-04/lowcode-345230', varPath: '$global.pic' },
      boundData: {}
    },{
      key: 'wa4vtavqju1o',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { val: '游客', varPath: '$global.my_name' },
      boundData: {}
    },
  ],
  onid85$userinfosuccess: [
    {
      key: 'wasmjf5j71s',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.my_name' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail.nickName
      )},
        }
    },{
      key: 'wa1itfk78ut8',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.pic' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail.avatarUrl
      )},
        }
    },{
      key: 'wabvq4nohbl',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'mine', params: {} },
      boundData: {}
    },
  ],
}
const dataBinds = {
}

createPage('u_she_zhi', 'u_she_zhi', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
