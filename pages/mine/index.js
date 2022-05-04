import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { mine as handlers } from '../../app/handlers'
// import index from '../../lowcode/mine/index'
import lifecyle from '../../lowcode/mine/lifecycle'
import state from '../../lowcode/mine/state'
import computed from '../../lowcode/mine/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id14: {
    style: {},
    classList: [ 'mint-div' ],
    title: '',
    _parentId: undefined,
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id15: {
    style: { background: 'rgb(0, 207, 164)' },
    classList: [ 'mine-top-div' ],
    title: '',
    _parentId: 'id14',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id78: {
    style: { marginLeft: '50rpx', paddingTop: '80rpx' },
    classList: [],
    columnRatio: '3:6:3',
    gutter: 20,
    mobileLayout: 'horizontal',
    rowGutter: 20,
    slot0: '',
    slot1: '',
    slot10: '',
    slot11: '',
    slot2: '',
    slot3: '',
    slot4: '',
    slot5: '',
    slot6: '',
    slot7: '',
    slot8: '',
    slot9: '',
    _parentId: 'id15',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:GridLayout'
  },
  id79: {
    style: { width: '100%', height: '100%' },
    classList: [],
    alt: '[图片]',
    fit: 'contain',
    imgPreview: false,
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: '',
    _parentId: 'id78',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id80: {
    style: {
      paddingTop: '70rpx',
      textAlign: 'center',
      whiteSpace: 'pre-line'
    },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    userSelect: true,
    _parentId: 'id78',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id81: {
    style: { width: '40%', height: '40%' },
    classList: [],
    alt: '[图片]',
    fit: 'contain',
    imgPreview: false,
    lazyLoad: false,
    mode: 'scaleToFill',
    showMenuByLongpress: '',
    src: '/resources/2022-04/lowcode-346629',
    _parentId: 'id78',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id16: {
    style: {},
    classList: [ 'mint-div' ],
    title: '',
    _parentId: 'id14',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id21: {
    style: {},
    classList: [ 'mine-card-div' ],
    title: '',
    _parentId: 'id16',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id22: {
    style: {},
    classList: [ 'mine-card-left-div' ],
    title: '',
    _parentId: 'id21',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id24: {
    style: { width: '36rpx', height: '36rpx' },
    classList: [ 'mine-card-logo-left' ],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: '/resources/2022-04/lowcode-346962',
    webp: false,
    _parentId: 'id22',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id25: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'mine-card-title' ],
    decode: false,
    level: '0',
    maxLines: 2,
    selectable: false,
    space: '',
    text: '我的订单',
    userSelect: true,
    _parentId: 'id22',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id23: {
    style: { position: 'relative', top: '5rpx' },
    classList: [],
    title: '',
    _parentId: 'id21',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id26: {
    style: { width: '32rpx', height: '32rpx' },
    classList: [ 'mine-card-logo-rigth' ],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: 'https://main.qcloudimg.com/raw/5048471b330cd265ba833c6de1053556.png',
    webp: false,
    _parentId: 'id23',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id48: {
    style: {},
    classList: [ 'mine-card-div' ],
    title: '',
    _parentId: 'id16',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id49: {
    style: {},
    classList: [ 'mine-card-left-div' ],
    title: '',
    _parentId: 'id48',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id51: {
    style: { width: '36rpx', height: '36rpx' },
    classList: [ 'mine-card-logo-left' ],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: '/resources/2022-04/lowcode-346963',
    webp: false,
    _parentId: 'id49',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id52: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'mine-card-title' ],
    decode: false,
    maxLines: 2,
    selectable: false,
    space: '',
    text: '我的商品',
    userSelect: true,
    _parentId: 'id49',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id53: {
    style: { width: '32rpx', height: '32rpx' },
    classList: [ 'mine-card-logo-rigth' ],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: 'https://main.qcloudimg.com/raw/5048471b330cd265ba833c6de1053556.png',
    webp: false,
    _parentId: 'id48',
    _order: 1,
    widgetType: 'gsd-h5-react:Image'
  },
  id83: {
    style: { height: '100rpx' },
    classList: [],
    _parentId: 'id16',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id76: {
    style: { zIndex: '9999' },
    classList: [],
    back: false,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    center: '',
    end: '',
    home: false,
    iconTheme: 'black',
    mode: 'default',
    start: '',
    textColor: 'rgba(0, 0, 0, 1)',
    textSize: 32,
    title: '我的',
    _parentId: undefined,
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:NavBar'
  },
  id77: {
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
  onid81$tap: [
    {
      key: 'wabfbntt414',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_she_zhi', params: {} },
      boundData: {}
    },
  ],
  onid21$tap: [
    {
      key: 'wavho8lvvos',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_wo_de_ding_dan', params: {} },
      boundData: {}
    },
  ],
  onid48$tap: [
    {
      key: 'wa9eoaqfqsc',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_wo_de_shang_pin', params: {} },
      boundData: {}
    },
  ],
}
const dataBinds = {
  id79: { 
    src: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.pic
    ); },
  },
  id80: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.my_name
    ); },
  },
}

createPage('mine', 'mine', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
