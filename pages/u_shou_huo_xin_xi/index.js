import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_shou_huo_xin_xi as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_shou_huo_xin_xi/index'
import lifecyle from '../../lowcode/u_shou_huo_xin_xi/lifecycle'
import state from '../../lowcode/u_shou_huo_xin_xi/state'
import computed from '../../lowcode/u_shou_huo_xin_xi/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id84: {
    style: {
      width: '100%',
      margin: '0rpx auto',
      padding: '60rpx 30rpx 10rpx',
      borderRadius: '5rpx',
      maxWidth: '1500rpx',
      boxShadow: '2rpx 2rpx 4rpx #f8f8f8,-2px -2rpx 4rpx #f8f8f8'
    },
    classList: [],
    title: '',
    _parentId: undefined,
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id86: {
    style: { marginLeft: '40rpx', fontWeight: 'bolder' },
    classList: [],
    color: 'rgb(0, 0, 0)',
    justify: 'start',
    level: '3',
    text: '收货信息',
    _parentId: 'id84',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Title'
  },
  id94: {
    style: {},
    classList: [],
    _parentId: undefined,
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id97: {
    style: {},
    classList: [],
    appParameter: '',
    categoryId: [],
    content: '确定',
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
    _parentId: 'id94',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:Button'
  },
  id98: {
    style: {},
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '收货地址',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'formInput',
    password: false,
    placeholder: '请输入',
    required: false,
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    value: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id99: {
    style: {},
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '手机号',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'formInput',
    password: false,
    placeholder: '请输入',
    required: false,
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    value: '',
    _parentId: undefined,
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  }
}
/** widget event listeners **/
const evtListeners = {
  onid97$tap: [
    {
      key: 'waoamqudeka8',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_gou_mai_jie_mian', params: {} },
      boundData: {}
    },
  ],
  onid98$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },{
      key: 'wajr8eckf5m8',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.sh_address' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail.value
      )},
        }
    },
  ],
  onid98$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid98$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid98$clear: [
    {
      key: 'wae2nvj8cvh8',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { val: '请填写收货地址', varPath: '$global.sh_address' },
      boundData: {}
    },
  ],
  onid99$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },{
      key: 'wa2b5s6qhhio',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.sh_phone' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail.value
      )},
        }
    },
  ],
  onid99$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid99$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid99$clear: [
    {
      key: 'wasbkbfucfho',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { val: '请填写手机号码', varPath: '$global.sh_phone' },
      boundData: {}
    },
  ],
}
const dataBinds = {
}

createPage('u_shou_huo_xin_xi', 'u_shou_huo_xin_xi', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
