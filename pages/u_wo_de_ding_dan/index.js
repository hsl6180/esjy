import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_wo_de_ding_dan as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_wo_de_ding_dan/index'
import lifecyle from '../../lowcode/u_wo_de_ding_dan/lifecycle'
import state from '../../lowcode/u_wo_de_ding_dan/state'
import computed from '../../lowcode/u_wo_de_ding_dan/computed'
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
    text: '我的订单列表',
    _parentId: 'id46',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Title'
  },
  id84: {
    style: {},
    classList: [],
    datasource: {
      name: 'wddd_c1urxrm',
      type: 'datamodal',
      extra: {
        params: {},
        viewId: 'view-2xpgw5bhm8',
        methodName: 'wedaGetRecords'
      }
    },
    orderBy: 'createdAt',
    orderType: 'asc',
    pageSize: 5,
    pagination: 'loadMoreButton',
    template: 'simpleList',
    _parentId: 'id46',
    _order: 1,
    widgetType: 'gsd-h5-react:ListView'
  },
  id102: {
    style: {
      width: '100%',
      padding: '15PX 18PX 14PX 19PX',
      background: 'rgb(255, 255, 255)',
      position: 'relative',
      boxSizing: 'border-box',
      borderBottom: '1rpx dashed #acacac'
    },
    classList: [],
    _parentId: 'id84',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id103: {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      boxSizing: 'border-box'
    },
    classList: [],
    _parentId: 'id102',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id104: {
    style: { fontSize: '16PX', flex: '1', wordBreak: 'break-all' },
    classList: [],
    _parentId: 'id103',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id105: {
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
    _parentId: 'id104',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id106: {
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
    maxLines: 1,
    space: false,
    textAlign: 'left',
    textColor: 'rgb(0, 0,0)',
    userSelect: true,
    _parentId: 'id104',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id107: {
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
    _parentId: 'id103',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id108: {
    style: {},
    classList: [],
    color: '',
    name: 'chevronright',
    size: 48,
    src: '',
    _parentId: 'id107',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id101: {
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
  onid84$onDataChange: [
    {
      key: '',
      handler:  ({event})=>{
          app.utils.set(context, 'id84.data', event?.detail?.data);
        } ,
      data: {},
      boundData: {}
    },
  ],
  onid102$tap: [
    {
      key: 'watrkoqbk34o',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.dd_id' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id102.spbs
      )},
        }
    },{
      key: 'waec1jp522jg',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'wap382l886g', params: {} },
      boundData: {}
    },
  ],
}
const dataBinds = {
  id84: { 
    where: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      [{"groupLogic":null,"logicData":[{"key":"mjmc","rel":"equal","extra":{"id":"wa9jnpad3e2o","type":"string","format":"","childId":null,"parentId":null,"isExpression":false},"logic":null,"value":app.dataset.state.my_name,"keyType":"field","valueType":"var-font","expression":true}]}]
    ); },
  },
  id102: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $context.id84.data
    ); },
  },
  id105: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id102.spmc
    ); },
  },
  id106: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id102.spjg
    ); },
  },
}

createPage('u_wo_de_ding_dan', 'u_wo_de_ding_dan', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
