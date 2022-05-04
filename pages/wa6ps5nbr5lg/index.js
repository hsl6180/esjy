import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { wa6ps5nbr5lg as handlers } from '../../app/handlers'
// import index from '../../lowcode/wa6ps5nbr5lg/index'
import lifecyle from '../../lowcode/wa6ps5nbr5lg/lifecycle'
import state from '../../lowcode/wa6ps5nbr5lg/state'
import computed from '../../lowcode/wa6ps5nbr5lg/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id154: {
    style: {},
    classList: [],
    _parentId: undefined,
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id163: {
    style: {},
    classList: [],
    datasource: {
      name: 'dbdx_w3c513v',
      type: 'datamodal',
      extra: {
        params: {},
        viewId: 'view-2xc9sc2f4g',
        methodName: 'wedaGetRecords'
      }
    },
    orderBy: '',
    orderType: '',
    pageSize: 5,
    pagination: 'loadMoreButton',
    template: 'none',
    _parentId: 'id154',
    _order: 0,
    widgetType: 'gsd-h5-react:ListView'
  },
  id164: {
    style: {
      width: '100%',
      padding: '15PX 18PX 14PX 19PX',
      background: 'rgb(255, 255, 255)',
      position: 'relative',
      boxSizing: 'border-box',
      borderBottom: '1rpx dashed #acacac'
    },
    classList: [],
    _parentId: 'id163',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id171: {
    style: {},
    classList: [],
    content: '',
    footer: '',
    header: '',
    _parentId: 'id164',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Layout'
  },
  id175: {
    style: { width: '500rpx', height: '500rpx' },
    classList: [],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: false,
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: '',
    _parentId: 'id171',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id176: {
    style: {},
    classList: [],
    color: '#000',
    justify: 'center',
    level: '1',
    _parentId: 'id171',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Title'
  },
  id177: {
    style: { color: 'rgb(207, 5, 0)', whiteSpace: 'pre-line' },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    userSelect: true,
    _parentId: 'id171',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id174: {
    style: { whiteSpace: 'pre-line' },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    userSelect: true,
    _parentId: 'id164',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id219: {
    style: {},
    classList: [],
    appParameter: '',
    categoryId: [],
    content: '继续提交商品',
    disabled: false,
    formType: 'button',
    loading: false,
    openType: '',
    sendMessageImg: '',
    sendMessagePath: '',
    sendMessageTitle: '',
    sessionFrom: '',
    showMessageCard: false,
    size: 'default',
    type: 'primary',
    _parentId: 'id164',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:Button'
  },
  id220: {
    style: {},
    classList: [],
    _parentId: 'id164',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id216: {
    style: { height: '100rpx' },
    classList: [],
    _parentId: 'id154',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id217: {
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
    _parentId: 'id216',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:TabBar'
  }
}
/** widget event listeners **/
const evtListeners = {
  onid163$onDataChange: [
    {
      key: '',
      handler:  ({event})=>{
          app.utils.set(context, 'id163.data', event?.detail?.data);
        } ,
      data: {},
      boundData: {}
    },
  ],
  onid219$tap: [
    {
      key: 'wa85bnd5vl38',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_wo_de_shang_jia_sha', params: {} },
      boundData: {}
    },
  ],
}
const dataBinds = {
  id163: { 
    where: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      [{"groupLogic":null,"logicData":[{"key":"_id","rel":"equal","extra":{"id":"wah2uduh1fng","type":"string","format":"","childId":null,"parentId":null,"isExpression":false},"logic":null,"value":app.dataset.state.wd_sp,"keyType":"field","valueType":"var-font","expression":true}]}]
    ); },
  },
  id164: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $context.id163.data
    ); },
  },
  id175: { 
    src: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.sptp
    ); },
  },
  id176: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.spmc
    ); },
  },
  id177: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.spjg
    ); },
  },
  id174: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.spms
    ); },
  },
}

createPage('wa6ps5nbr5lg', 'wa6ps5nbr5lg', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
