import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_liao_tian as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_liao_tian/index'
import lifecyle from '../../lowcode/u_liao_tian/lifecycle'
import state from '../../lowcode/u_liao_tian/state'
import computed from '../../lowcode/u_liao_tian/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id1: {
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
    _parentId: undefined,
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:NavBar'
  },
  id5: {
    style: {
      height: '1000rpx',
      border: '5rpx solid rgb(0, 0, 0)',
      background: 'rgba(218, 211, 211, 0.29)'
    },
    classList: [],
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id73: {
    style: { border: '5rpx none rgb(0, 0, 0)' },
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
    pagination: 'bottomLoad',
    template: 'simpleList',
    _parentId: 'id5',
    _order: 0,
    widgetType: 'gsd-h5-react:ListView'
  },
  id74: {
    style: {
      width: '100%',
      padding: '15PX 18PX 14PX 19PX',
      position: 'relative',
      boxSizing: 'border-box',
      borderBottom: '1rpx dashed #acacac'
    },
    classList: [],
    _parentId: 'id73',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id75: {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      boxSizing: 'border-box'
    },
    classList: [],
    _parentId: 'id74',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id76: {
    style: { fontSize: '16PX', flex: '1', wordBreak: 'break-all' },
    classList: [],
    _parentId: 'id75',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id78: {
    style: {
      width: '50%',
      marginTop: '12PX',
      display: '-webkit-box',
      color: 'rgb(0, 0, 0)',
      fontSize: '16PX',
      lineHeight: '20PX',
      fontWeight: 'bolder',
      opacity: 0.4,
      border: '2rpx solid rgb(0, 0, 0)',
      borderRadius: '10rpx',
      background: 'rgba(21, 244, 9, 0.99)',
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
    _parentId: 'id76',
    _order: 2,
    widgetType: 'gsd-h5-react:Text'
  },
  id77: {
    style: {
      width: 'auto',
      display: '-webkit-box',
      color: 'rgba(0, 0, 0, 0.9)',
      lineHeight: '20PX',
      fontWeight: 'lighter',
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
    _parentId: 'id76',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id137: {
    style: { height: '25%' },
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
    pageSize: 1,
    pagination: 'none',
    template: 'none',
    _parentId: undefined,
    _order: 3,
    widgetType: 'gsd-h5-react:ListView'
  },
  id138: {
    style: {
      width: '100%',
      padding: '15PX 18PX 14PX 19PX',
      background: 'rgb(255, 255, 255)',
      position: 'relative',
      boxSizing: 'border-box',
      borderBottom: '1rpx dashed #acacac'
    },
    classList: [],
    _parentId: 'id137',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id172: {
    style: {},
    classList: [],
    datasourceType: 'model',
    fields: [ {} ],
    formType: 'create',
    initialValues: {},
    layout: 'horizontal',
    varPath: [ 'cs_xvsguit', 'wedaCreate' ],
    _parentId: 'id138',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Form'
  },
  id182: {
    style: { width: '0rpx', height: '0rpx' },
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '发送方',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'fsf',
    password: false,
    placeholder: '请输入',
    required: true,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id172',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id183: {
    style: {},
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '😊',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'nr',
    password: false,
    placeholder: '请输入',
    required: true,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    value: '',
    _parentId: 'id172',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id184: {
    style: { width: '0rpx', height: '0rpx' },
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '接收方',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'jsf',
    password: false,
    placeholder: '请输入',
    required: true,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id172',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id186: {
    style: { width: '0rpx', height: '0rpx' },
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '商品价格',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'spjg',
    password: false,
    placeholder: '请输入',
    required: false,
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    value: '-1',
    _parentId: 'id172',
    _order: 4,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id187: {
    style: {},
    classList: [],
    _parentId: 'id172',
    _order: 6,
    widgetType: 'gsd-h5-react:Container'
  },
  id188: {
    style: {},
    classList: [],
    appParameter: '',
    categoryId: [],
    content: '发送',
    disabled: false,
    formType: 'submit',
    loading: false,
    openType: '',
    sendMessageImg: '',
    sendMessagePath: '',
    sendMessageTitle: '',
    sessionFrom: '',
    showMessageCard: false,
    size: 'default',
    type: 'primary',
    _parentId: 'id187',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Button'
  },
  id189: {
    style: { width: '0rpx', height: '0rpx' },
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '商品名称',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'spmc',
    password: false,
    placeholder: '请输入',
    required: false,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id172',
    _order: 5,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  }
}
/** widget event listeners **/
const evtListeners = {
  onid1$back: [
    {
      key: 'wa1gtc8qio5o',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_xiao_xi', params: {} },
      boundData: {}
    },
  ],
  onid1$home: [
    {
      key: 'wa8qadl5t3tg',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'index', params: {} },
      boundData: {}
    },
  ],
  onid73$onDataChange: [
    {
      key: '',
      handler:  ({event})=>{
          app.utils.set(context, 'id73.data', event?.detail?.data);
        } ,
      data: {},
      boundData: {}
    },
  ],
  onid137$onDataChange: [
    {
      key: '',
      handler:  ({event})=>{
          app.utils.set(context, 'id137.data', event?.detail?.data);
        } ,
      data: {},
      boundData: {}
    },
  ],
  onid172$submit: [
    {
      key: 'e7eec218',
      handler:  function({data}){ return app.cloud.callDataSource(data)} ,
      data: {
  dataSourceName: 'cs_xvsguit',
  methodName: 'wedaCreate',
  options: { showToast: false, showLoading: false }
},
      boundData: {'params':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail
      )},
        }
    },
  ],
  onid172$e7eec218_fail: [
    {
      key: '4fdd53c0',
      handler:  function({data}){ return app.showToast(data)} ,
      data: { icon: 'error', title: '提交失败' },
      boundData: {}
    },
  ],
  onid172$e7eec218_success: [
    {
      key: 'walpi535rlk',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_ce_shi', params: {} },
      boundData: {}
    },
  ],
  onid172$walpi535rlk_success: [
    {
      key: 'wa8ib0b7o96',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_liao_tian', params: {} },
      boundData: {}
    },
  ],
  onid182$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid182$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid182$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid183$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid183$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid183$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid184$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid184$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid184$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid186$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid186$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid186$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid189$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid189$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid189$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
}
const dataBinds = {
  id1: { 
    title: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.chat_sp_name
    ); },
  },
  id73: { 
    where: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      [{"groupLogic":null,"logicData":[{"key":"spmc","rel":"equal","extra":{"id":"wap98sdfmkjg","type":"string","format":"","childId":null,"parentId":null,"isExpression":false},"logic":null,"value":app.dataset.state.chat_sp_name,"keyType":"field","valueType":"var-font","expression":true}]}]
    ); },
  },
  id74: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $context.id73.data
    ); },
  },
  id78: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id74.nr
    ); },
  },
  id77: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id74.fsf
    ); },
  },
  id137: { 
    where: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      [{"groupLogic":null,"logicData":[{"key":"_id","keyType":"field","rel":"equal","value":app.dataset.state.chat_sp,"valueType":"var-font","logic":null,"expression":true,"extra":{"id":"wa6gpjbkrap","childId":null,"parentId":null,"type":"string","format":"","isExpression":false}}]}]
    ); },
  },
  id138: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $context.id137.data
    ); },
  },
  id182: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.my_name
    ); },
  },
  id184: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id138.mjmc
    ); },
  },
  id189: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id138.spmc
    ); },
  },
}

createPage('u_liao_tian', 'u_liao_tian', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
