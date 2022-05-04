import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { wap382l886g as handlers } from '../../app/handlers'
// import index from '../../lowcode/wap382l886g/index'
import lifecyle from '../../lowcode/wap382l886g/lifecycle'
import state from '../../lowcode/wap382l886g/state'
import computed from '../../lowcode/wap382l886g/computed'
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
  id193: {
    style: {},
    classList: [],
    content: '',
    footer: '',
    header: '',
    _parentId: 'id164',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:Layout'
  },
  id192: {
    style: { fontSize: '33rpx' },
    classList: [],
    appParameter: '',
    categoryId: [],
    content: '再次购买',
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
    _parentId: 'id193',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Button'
  },
  id194: {
    style: {},
    classList: [],
    _parentId: 'id193',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id196: {
    style: {},
    classList: [],
    _parentId: 'id193',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id206: {
    style: {},
    classList: [],
    _parentId: 'id193',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id207: {
    style: {},
    classList: [],
    formType: 'create',
    initialValues: {},
    layout: 'horizontal',
    varPath: [ 'cs_xvsguit', 'wedaCreate' ],
    _parentId: 'id206',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Form'
  },
  id208: {
    style: { width: '0rpx', height: '0rpx' },
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '商品标识',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'spbs',
    password: false,
    placeholder: '请输入',
    required: false,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id207',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id209: {
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
    _parentId: 'id207',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id210: {
    style: { width: '0rpx', height: '0rpx' },
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '内容',
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
    value: '欢迎光临本店！',
    _parentId: 'id207',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id211: {
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
    _parentId: 'id207',
    _order: 4,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id212: {
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
    _parentId: 'id207',
    _order: 5,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id213: {
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
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id207',
    _order: 6,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id214: {
    style: {},
    classList: [],
    _parentId: 'id207',
    _order: 7,
    widgetType: 'gsd-h5-react:Container'
  },
  id215: {
    style: {},
    classList: [],
    appParameter: '',
    categoryId: [],
    content: '联系商家',
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
    _parentId: 'id214',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Button'
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
  onid192$tap: [
    {
      key: 'wa330gtb23dg',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.sp_id' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id164._id
      )},
        }
    },{
      key: 'wa4m1f0r2qno',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_shang_pin_xiang_qin_1', params: {} },
      boundData: {}
    },
  ],
  onid207$submit: [
    {
      key: 'ad671770',
      handler:  function({data}){ return app.showLoading(data)} ,
      data: { title: '正在提交...' },
      boundData: {}
    },{
      key: 'afd5e650',
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
  onid207$afd5e650_success: [
    {
      key: 'df1f144e',
      handler:  function({data}){ return app.hideLoading(data)} ,
      data: {},
      boundData: {}
    },{
      key: 'waf6n1ravaf',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_xiao_xi', params: {} },
      boundData: {}
    },
  ],
  onid207$afd5e650_fail: [
    {
      key: '15f7c9da',
      handler:  function({data}){ return app.hideLoading(data)} ,
      data: {},
      boundData: {}
    },{
      key: 'waingftbcd4',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_xiao_xi', params: {} },
      boundData: {}
    },
  ],
  onid208$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid208$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid208$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid209$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid209$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid209$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid210$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid210$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid210$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid211$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid211$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid211$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid212$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid212$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid212$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid213$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid213$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid213$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
}
const dataBinds = {
  id163: { 
    where: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      [{"groupLogic":null,"logicData":[{"key":"_id","rel":"equal","extra":{"id":"wah2uduh1fng","type":"string","format":"","childId":null,"parentId":null,"isExpression":false},"logic":null,"value":app.dataset.state.dd_id,"keyType":"field","valueType":"var-font","expression":true}]}]
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
  id208: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164._id
    ); },
  },
  id209: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.mjmc
    ); },
  },
  id211: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.my_name
    ); },
  },
  id212: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.spmc
    ); },
  },
  id213: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.spjg
    ); },
  },
}

createPage('wap382l886g', 'wap382l886g', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
