import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_xiao_xi as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_xiao_xi/index'
import lifecyle from '../../lowcode/u_xiao_xi/lifecycle'
import state from '../../lowcode/u_xiao_xi/state'
import computed from '../../lowcode/u_xiao_xi/computed'
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
  id47: {
    style: { paddingRight: '20rpx', paddingLeft: '20rpx' },
    classList: [],
    title: '',
    _parentId: 'id46',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id95: {
    style: {
      padding: '23rpx 20rpx',
      display: 'flex',
      justifyContent: 'center',
      border: '1rpx solid rgb(240, 240, 241)',
      background: 'white',
      cursor: 'pointer'
    },
    classList: [],
    title: '',
    _parentId: 'id47',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id97: {
    style: {},
    classList: [],
    content: '',
    footer: '',
    header: '',
    _parentId: 'id95',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Layout'
  },
  id98: {
    style: {},
    classList: [],
    borderPosition: 'bottom',
    bordered: true,
    customIcon: '',
    customTitle: '',
    customValue: '',
    description: '',
    detail: true,
    isClickable: true,
    title: '订单动态',
    titleWidth: 'auto',
    value: '查看详情',
    _parentId: 'id95',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Item'
  },
  id102: {
    style: {},
    classList: [],
    _parentId: 'id47',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
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
    text: '通知&聊天',
    _parentId: 'id46',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Title'
  },
  id104: {
    style: {},
    classList: [],
    datasource: {
      name: 'cs_xvsguit',
      type: 'datamodal',
      extra: {
        params: {},
        viewId: 'view-2y2wdwuths',
        methodName: 'wedaGetRecords'
      }
    },
    orderBy: 'createdAt',
    orderType: 'asc',
    pageSize: 5,
    pagination: 'loadMoreButton',
    template: 'simpleList',
    _parentId: 'id46',
    _order: 3,
    widgetType: 'gsd-h5-react:ListView'
  },
  id105: {
    style: {
      width: '100%',
      padding: '15PX 18PX 14PX 19PX',
      background: 'rgb(255, 255, 255)',
      position: 'relative',
      boxSizing: 'border-box',
      borderBottom: '1rpx dashed #acacac'
    },
    classList: [],
    _parentId: 'id104',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id106: {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      boxSizing: 'border-box'
    },
    classList: [],
    _parentId: 'id105',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id107: {
    style: { fontSize: '16PX', flex: '1', wordBreak: 'break-all' },
    classList: [],
    _parentId: 'id106',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id108: {
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
    _parentId: 'id107',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id109: {
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
    maxLines: 1,
    space: false,
    textAlign: 'left',
    textColor: 'rgb(0, 0,0)',
    userSelect: true,
    _parentId: 'id107',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id110: {
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
    _parentId: 'id106',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id111: {
    style: {},
    classList: [],
    color: '',
    name: 'chevronright',
    size: 48,
    src: '',
    _parentId: 'id110',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id112: {
    style: {},
    classList: [],
    color: '#000',
    justify: 'start',
    level: '3',
    text: '聊天记录',
    _parentId: 'id46',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:Title'
  },
  id103: {
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
        __sortid__: 'plgCzISwFPno9oSzvzIw8',
        activeIcon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342801',
        withParams: false
      },
      {
        icon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-343484',
        name: 'u_xiao_xi',
        title: '消息',
        iconFont: 'custom',
        __sortid__: 'sMZR2BPfZ-537UfnsI1a-',
        activeIcon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-343484',
        withParams: false
      },
      {
        icon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342803',
        name: 'mine',
        title: '我的',
        iconFont: 'custom',
        __sortid__: 'O0VWue3A9GvZXahBzErD4',
        activeIcon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342803',
        withParams: false
      }
    ],
    value: '',
    _parentId: undefined,
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:TabBar'
  }
}
/** widget event listeners **/
const evtListeners = {
  onid95$tap: [
    {
      key: 'wantv2emssn8',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_ding_dan_dong_tai', params: {} },
      boundData: {}
    },
  ],
  onid104$onDataChange: [
    {
      key: '',
      handler:  ({event})=>{
          app.utils.set(context, 'id104.data', event?.detail?.data);
        } ,
      data: {},
      boundData: {}
    },
  ],
  onid105$tap: [
    {
      key: 'warolflfa4hg',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.chat_sp_name' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id105.spmc
      )},
        }
    },{
      key: 'wa0soubmj0j8',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_liao_tian', params: {} },
      boundData: {}
    },{
      key: 'wae02hmcpji8',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.chat_sp' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id105.spbs
      )},
        }
    },
  ],
}
const dataBinds = {
  id95: { 
    _waIf: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $page.dataset.state.$status.wedaListMeta.status!=='loading' && $page.dataset.state.wedaListMeta && $page.dataset.state.wedaListMeta.records && !$page.dataset.state.wedaListMeta.records.length
    ); },
  },
  id104: { 
    where: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      [{"groupLogic":null,"logicData":[{"key":"spjg","rel":"unequal","extra":{"id":"waqf6j34q6ko","type":"string","format":"","childId":null,"parentId":null,"isExpression":false},"logic":null,"value":$page.dataset.state.blank,"keyType":"field","valueType":"var-font","expression":true}]}]
    ); },
  },
  id105: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $context.id104.data
    ); },
  },
  id108: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id105.spmc
    ); },
  },
  id109: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id105.fsf
    ); },
  },
}

createPage('u_xiao_xi', 'u_xiao_xi', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
