import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_gou_mai_jie_mian as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_gou_mai_jie_mian/index'
import lifecyle from '../../lowcode/u_gou_mai_jie_mian/lifecycle'
import state from '../../lowcode/u_gou_mai_jie_mian/state'
import computed from '../../lowcode/u_gou_mai_jie_mian/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id7: {
    style: { height: '150rpx', paddingTop: '30rpx' },
    classList: [],
    align: 'flex-start',
    customContent: '',
    customMedia: '',
    isCustomContent: false,
    isCustomMedia: false,
    mediaUrl: '/resources/2022-04/lowcode-424371',
    reverse: false,
    subtitle: '',
    subtitleType: 'raw',
    thumbSize: 100,
    _parentId: undefined,
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Media'
  },
  id8: {
    style: {},
    classList: [],
    _parentId: undefined,
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id20: {
    style: {},
    classList: [],
    datasource: {
      name: 'dbdx_w3c513v',
      type: 'datamodal',
      extra: {
        params: {},
        viewId: 'view-2x222fjs0w',
        methodName: 'wedaGetRecords'
      }
    },
    orderBy: '',
    orderType: '',
    pageSize: 5,
    pagination: 'loadMoreButton',
    template: 'imageTextList',
    _parentId: undefined,
    _order: 4,
    widgetType: 'gsd-h5-react:ListView'
  },
  id28: {
    style: {
      width: '100%',
      padding: '15PX 18PX 14PX 16PX',
      background: 'rgb(255, 255, 255)',
      position: 'relative',
      boxSizing: 'border-box',
      borderBottom: '1rpx dashed #acacac'
    },
    classList: [],
    _parentId: 'id20',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id29: {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      boxSizing: 'border-box'
    },
    classList: [],
    _parentId: 'id28',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id30: {
    style: { fontSize: '16PX', flex: '1', wordBreak: 'break-all' },
    classList: [],
    _parentId: 'id29',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id31: {
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
    _parentId: 'id30',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id32: {
    style: {
      width: 'auto',
      marginTop: '12PX',
      display: '-webkit-box',
      color: 'rgb(250, 12, 6)',
      fontSize: '18PX',
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
    _parentId: 'id30',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id35: {
    style: {
      width: '52PX',
      height: '52PX',
      marginRight: '10PX',
      position: 'relative'
    },
    classList: [],
    _parentId: 'id29',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id36: {
    style: { width: '100%', height: '100%' },
    classList: [],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: false,
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: '',
    _parentId: 'id35',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id38: {
    style: {},
    classList: [],
    columnRatio: '6:6',
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
    _parentId: 'id28',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:GridLayout'
  },
  id39: {
    style: {
      paddingTop: '25rpx',
      fontSize: '35rpx',
      textAlign: 'center',
      whiteSpace: 'pre-line'
    },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    text: '配送服务',
    userSelect: true,
    _parentId: 'id38',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id40: {
    style: { fontSize: '35rpx' },
    classList: [],
    borderPosition: 'bottom',
    bordered: true,
    customIcon: '',
    customTitle: '',
    customValue: '',
    description: '',
    detail: true,
    isClickable: false,
    title: '快递 免邮',
    titleWidth: 'auto',
    value: '',
    _parentId: 'id38',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Item'
  },
  id41: {
    style: {},
    classList: [],
    columnRatio: '6:6',
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
    _parentId: 'id28',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:GridLayout'
  },
  id46: {
    style: { paddingTop: '25rpx', fontSize: '35rpx', whiteSpace: 'pre-line' },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    text: '运险费',
    userSelect: true,
    _parentId: 'id41',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id47: {
    style: { color: 'rgba(17, 17, 17, 0.2)', fontWeight: 'lighter' },
    classList: [],
    borderPosition: 'bottom',
    bordered: true,
    customIcon: '',
    customTitle: '',
    customValue: '',
    description: '',
    detail: true,
    isClickable: false,
    title: '未选择',
    titleWidth: '',
    value: '',
    _parentId: 'id41',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Item'
  },
  id48: {
    style: {},
    classList: [],
    columnRatio: '6:6',
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
    _parentId: 'id28',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:GridLayout'
  },
  id49: {
    style: { paddingTop: '25rpx', fontSize: '35rpx', whiteSpace: 'pre-line' },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    text: '订单备注',
    userSelect: true,
    _parentId: 'id48',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id58: {
    style: { color: 'rgba(17, 17, 17, 0.2)', fontWeight: 'lighter' },
    classList: [],
    borderPosition: 'bottom',
    bordered: true,
    customIcon: '',
    customTitle: '',
    customValue: '',
    description: '',
    detail: true,
    isClickable: false,
    title: '无备注',
    titleWidth: 'auto',
    value: '',
    _parentId: 'id48',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Item'
  },
  id82: {
    style: {},
    classList: [],
    _parentId: 'id28',
    _order: 5,
    widgetType: 'gsd-h5-react:Container'
  },
  id100: {
    style: {},
    classList: [],
    datasourceType: 'model',
    fields: [ {} ],
    formType: 'create',
    initialValues: {},
    layout: 'horizontal',
    varPath: [ 'wddd_c1urxrm', 'wedaCreate' ],
    _parentId: 'id82',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Form'
  },
  id101: {
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
    required: true,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id100',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id102: {
    style: { width: '0rpx', height: '0rpx' },
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '卖家',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'mj',
    password: false,
    placeholder: '请输入',
    required: true,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id100',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id103: {
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
    required: true,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id100',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id104: {
    style: { width: '0rpx', height: '0rpx' },
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    label: '买家名称',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'mjmc',
    password: false,
    placeholder: '请输入',
    required: true,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id100',
    _order: 4,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id105: {
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
    required: true,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    _parentId: 'id100',
    _order: 5,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id106: {
    style: {},
    classList: [],
    _parentId: 'id100',
    _order: 6,
    widgetType: 'gsd-h5-react:Container'
  },
  id107: {
    style: {},
    classList: [],
    appParameter: '',
    categoryId: [],
    content: '提交订单',
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
    _parentId: 'id106',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Button'
  },
  id92: {
    style: {},
    classList: [],
    _parentId: 'id28',
    _order: 4,
    widgetType: 'gsd-h5-react:Container'
  },
  id93: {
    style: { textAlign: 'left' },
    classList: [],
    disabled: false,
    enumName: '',
    format: '',
    label: '',
    labelVisible: true,
    layout: '',
    name: 'formRadio',
    range: [
      { label: '支付宝', value: 'first' },
      { label: '微信支付', value: 'second' },
      { label: '信用卡', value: 'third' }
    ],
    required: false,
    requiredFlag: '',
    requiredMsg: '该项为必填项',
    tipBlock: '',
    value: '',
    _parentId: 'id92',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:FormRadio'
  },
  id94: {
    style: {},
    classList: [],
    _parentId: 'id92',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id95: {
    style: {},
    classList: [],
    columnRatio: '6:6',
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
    _parentId: 'id94',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:GridLayout'
  },
  id96: {
    style: {},
    classList: [],
    color: '#000',
    justify: 'center',
    level: '4',
    text: '合计金额：',
    _parentId: 'id95',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Title'
  },
  id97: {
    style: {},
    classList: [],
    color: 'rgb(252, 4, 4)',
    justify: 'center',
    level: '4',
    _parentId: 'id95',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Title'
  },
  id66: {
    style: { height: '100rpx' },
    classList: [],
    _parentId: undefined,
    _order: 6,
    widgetType: 'gsd-h5-react:Container'
  },
  id108: {
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
    _parentId: 'id66',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:TabBar'
  },
  id72: {
    style: {},
    classList: [],
    _parentId: undefined,
    _order: 5,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  }
}
/** widget event listeners **/
const evtListeners = {
  onid7$tap: [
    {
      key: 'waign12tr50o',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_shou_huo_xin_xi', params: {} },
      boundData: {}
    },
  ],
  onid20$onDataChange: [
    {
      key: '',
      handler:  ({event})=>{
          app.utils.set(context, 'id20.data', event?.detail?.data);
        } ,
      data: {},
      boundData: {}
    },
  ],
  onid100$submit: [
    {
      key: 'ffbef720',
      handler:  function({data}){ return app.showLoading(data)} ,
      data: { title: '正在提交...' },
      boundData: {}
    },{
      key: '53ab489f',
      handler:  function({data}){ return app.cloud.callDataSource(data)} ,
      data: {
  dataSourceName: 'wddd_c1urxrm',
  methodName: 'wedaCreate',
  options: { showToast: false, showLoading: false }
},
      boundData: {'params':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail
      )},
        }
    },
  ],
  onid100$53ab489f_success: [
    {
      key: '48bba210',
      handler:  function({data}){ return app.hideLoading(data)} ,
      data: {},
      boundData: {}
    },{
      key: 'wa77skj1u5bo',
      handler:  function({data}){ return app.showModal(data)} ,
      data: {
  cancelColor: '#000000',
  cancelText: '取消',
  confirmColor: '#576B95',
  confirmText: '确认',
  showCancel: true,
  title: '确认支付'
},
      boundData: {'content':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id28.spjg
      )},
        }
    },
  ],
  onid100$53ab489f_fail: [
    {
      key: 'c6ffd89d',
      handler:  function({data}){ return app.hideLoading(data)} ,
      data: {},
      boundData: {}
    },{
      key: '13075d55',
      handler:  function({data}){ return app.showToast(data)} ,
      data: { icon: 'error', title: '支付失败！' },
      boundData: {}
    },
  ],
  onid100$wa77skj1u5bo_success: [
    {
      key: 'watv729b9qog',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'index', params: {} },
      boundData: {}
    },
  ],
  onid100$watv729b9qog_success: [
    {
      key: 'wa57jc5mvt3g',
      handler:  function({data}){ return app.showToast(data)} ,
      data: { icon: 'success', title: '支付成功！' },
      boundData: {}
    },
  ],
  onid101$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid101$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid101$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid102$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid102$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid102$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid103$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid103$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid103$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid104$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid104$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid104$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid105$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid105$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid105$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid93$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
}
const dataBinds = {
  id7: { 
    content: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.sh_phone
    ); },
    title: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.sh_address
    ); },
  },
  id20: { 
    where: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      [{"groupLogic":null,"logicData":[{"key":"_id","keyType":"field","rel":"equal","value":app.dataset.state.sp_id,"valueType":"var-font","logic":null,"expression":true,"extra":{"id":"waskbjajjvqo","childId":null,"parentId":null,"type":"string","format":"","isExpression":false}}]}]
    ); },
  },
  id28: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $context.id20.data
    ); },
  },
  id31: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id28.spmc
    ); },
  },
  id32: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id28.spjg
    ); },
  },
  id36: { 
    src: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id28.sptp
    ); },
  },
  id101: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id28._id
    ); },
  },
  id102: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id28.mjmc
    ); },
  },
  id103: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id28.spjg
    ); },
  },
  id104: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.my_name
    ); },
  },
  id105: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id28.spmc
    ); },
  },
  id97: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id28.spjg
    ); },
  },
}

createPage('u_gou_mai_jie_mian', 'u_gou_mai_jie_mian', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
