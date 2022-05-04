import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_wo_de_shang_jia_sha as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_wo_de_shang_jia_sha/index'
import lifecyle from '../../lowcode/u_wo_de_shang_jia_sha/lifecycle'
import state from '../../lowcode/u_wo_de_shang_jia_sha/state'
import computed from '../../lowcode/u_wo_de_shang_jia_sha/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id9: {
    style: { padding: '64rpx 0rpx' },
    classList: [],
    title: '',
    _parentId: undefined,
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id17: {
    style: { paddingBottom: '64rpx', paddingLeft: '64rpx' },
    classList: [],
    title: '',
    _parentId: 'id9',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id44: {
    style: {},
    classList: [],
    datasourceType: 'model',
    fields: [ {} ],
    formType: 'create',
    initialValues: {},
    layout: 'horizontal',
    varPath: [ 'dbdx_w3c513v', 'wedaCreate' ],
    _parentId: 'id17',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Form'
  },
  id45: {
    style: {},
    classList: [],
    acceptTypes: [ 'image/jpeg', 'image/png' ],
    btnTitle: '上传图片',
    disableMultiSwitch: true,
    label: '商品图片',
    labelVisible: true,
    layout: '',
    maxSize: 10,
    maxUploadCount: 9,
    name: 'sptp',
    required: true,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    single: true,
    tips: '上传图片提示',
    title: '上传图片',
    value: [],
    _parentId: 'id44',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:FormImageUploader'
  },
  id46: {
    style: {},
    classList: [],
    clearable: true,
    confirmType: 'done',
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
    value: '',
    _parentId: 'id44',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id47: {
    style: {},
    classList: [],
    clearable: true,
    confirmType: 'done',
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
    value: '',
    _parentId: 'id44',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id48: {
    style: { width: '0rpx', height: '0rpx' },
    classList: [],
    clearable: true,
    confirmType: 'done',
    disabled: false,
    focus: false,
    label: '卖家名称',
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
    _parentId: 'id44',
    _order: 4,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id49: {
    style: {},
    classList: [],
    clearable: true,
    confirmType: 'done',
    disabled: false,
    focus: false,
    label: '商品描述',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    name: 'spms',
    password: false,
    placeholder: '请输入',
    required: false,
    requiredFlag: false,
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    value: '',
    _parentId: 'id44',
    _order: 5,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id50: {
    style: {},
    classList: [],
    _parentId: 'id44',
    _order: 6,
    widgetType: 'gsd-h5-react:Container'
  },
  id51: {
    style: { marginTop: '100rpx' },
    classList: [],
    appParameter: '',
    categoryId: [],
    content: '提交',
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
    _parentId: 'id50',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Button'
  },
  id53: {
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
  onid44$submit: [
    {
      key: '5bdb8641',
      handler:  function({data}){ return app.showLoading(data)} ,
      data: { title: '正在提交...' },
      boundData: {}
    },{
      key: '446da540',
      handler:  function({data}){ return app.cloud.callDataSource(data)} ,
      data: {
  dataSourceName: 'dbdx_w3c513v',
  methodName: 'wedaCreate',
  options: { showToast: false, showLoading: false }
},
      boundData: {'params':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail
      )},
        }
    },
  ],
  onid44$446da540_success: [
    {
      key: '85efb80e',
      handler:  function({data}){ return app.hideLoading(data)} ,
      data: {},
      boundData: {}
    },{
      key: 'e3e6e03c',
      handler:  function({data}){ return app.showToast(data)} ,
      data: { icon: 'success', title: '提交成功' },
      boundData: {}
    },{
      key: '92ac0087',
      handler:  function({data}){ return app.navigateBack(data)} ,
      data: {},
      boundData: {}
    },
  ],
  onid44$446da540_fail: [
    {
      key: '05596afb',
      handler:  function({data}){ return app.hideLoading(data)} ,
      data: {},
      boundData: {}
    },{
      key: 'f3fb4f14',
      handler:  function({data}){ return app.showToast(data)} ,
      data: { icon: 'error', title: '提交失败' },
      boundData: {}
    },
  ],
  onid45$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid46$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid46$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid46$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid47$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid47$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid47$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid48$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid48$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid48$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid49$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid49$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid49$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
}
const dataBinds = {
  id48: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.my_name
    ); },
  },
}

createPage('u_wo_de_shang_jia_sha', 'u_wo_de_shang_jia_sha', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
