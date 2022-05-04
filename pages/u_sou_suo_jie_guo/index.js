import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_sou_suo_jie_guo as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_sou_suo_jie_guo/index'
import lifecyle from '../../lowcode/u_sou_suo_jie_guo/lifecycle'
import state from '../../lowcode/u_sou_suo_jie_guo/state'
import computed from '../../lowcode/u_sou_suo_jie_guo/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id10: {
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
    _parentId: undefined,
    _order: 2,
    widgetType: 'gsd-h5-react:ListView'
  },
  id18: {
    style: {
      width: '100%',
      padding: '15PX 18PX 14PX 16PX',
      background: 'rgb(255, 255, 255)',
      position: 'relative',
      boxSizing: 'border-box',
      borderBottom: '1rpx dashed #acacac'
    },
    classList: [],
    _parentId: 'id10',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id19: {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      boxSizing: 'border-box'
    },
    classList: [],
    _parentId: 'id18',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id20: {
    style: { fontSize: '16PX', flex: '1', wordBreak: 'break-all' },
    classList: [],
    _parentId: 'id19',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id21: {
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
    _parentId: 'id20',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id22: {
    style: {
      width: 'auto',
      marginTop: '12PX',
      display: '-webkit-box',
      color: 'rgb(252, 4, 4)',
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
    _parentId: 'id20',
    _order: 2,
    widgetType: 'gsd-h5-react:Text'
  },
  id23: {
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
    _parentId: 'id19',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id24: {
    style: {},
    classList: [],
    color: '',
    name: 'chevronright',
    size: 48,
    src: '',
    _parentId: 'id23',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id25: {
    style: {
      width: '52PX',
      height: '52PX',
      marginRight: '10PX',
      position: 'relative'
    },
    classList: [],
    _parentId: 'id19',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id26: {
    style: { width: '100%', height: '100%' },
    classList: [],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: false,
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: '',
    _parentId: 'id25',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id27: {
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
  },
  id43: {
    style: {},
    classList: [],
    back: true,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    center: '',
    end: '',
    home: true,
    iconTheme: 'black',
    mode: 'default',
    start: '',
    textColor: 'rgba(0, 0, 0, 1)',
    textSize: 28,
    title: '搜索结果',
    _parentId: undefined,
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:NavBar'
  }
}
/** widget event listeners **/
const evtListeners = {
  onid10$onDataChange: [
    {
      key: '',
      handler:  ({event})=>{
          app.utils.set(context, 'id10.data', event?.detail?.data);
        } ,
      data: {},
      boundData: {}
    },
  ],
  onid18$tap: [
    {
      key: 'wa3eagcet5qg',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.sp_id' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id18._id
      )},
        }
    },{
      key: 'wardgdj406to',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_shang_pin_xiang_qin_1', params: {} },
      boundData: {}
    },
  ],
  onid43$back: [
    {
      key: 'waegq5gnt8ng',
      handler:  function({data}){ return app.navigateBack(data)} ,
      data: {},
      boundData: {}
    },
  ],
  onid43$home: [
    {
      key: 'waevd6hu58k8',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', params: {} },
      boundData: {}
    },
  ],
}
const dataBinds = {
  id10: { 
    where: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      [{"groupLogic":null,"logicData":[{"key":"spmc","keyType":"field","rel":"include","value":app.dataset.state.name,"valueType":"var-font","logic":null,"expression":true,"extra":{"id":"wale7equmhho","childId":null,"parentId":null,"type":"string","format":"","isExpression":false}}]}]
    ); },
  },
  id18: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $context.id10.data
    ); },
  },
  id21: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id18.spmc
    ); },
  },
  id22: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id18.spjg
    ); },
  },
  id26: { 
    src: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id18.sptp
    ); },
  },
}

createPage('u_sou_suo_jie_guo', 'u_sou_suo_jie_guo', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
