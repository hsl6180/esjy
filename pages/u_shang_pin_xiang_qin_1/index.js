import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_shang_pin_xiang_qin_1 as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_shang_pin_xiang_qin_1/index'
import lifecyle from '../../lowcode/u_shang_pin_xiang_qin_1/lifecycle'
import state from '../../lowcode/u_shang_pin_xiang_qin_1/state'
import computed from '../../lowcode/u_shang_pin_xiang_qin_1/computed'
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
        viewId: 'view-2x222fjs0w',
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
  id201: {
    style: {},
    classList: [],
    _parentId: 'id164',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id238: {
    style: {},
    classList: [],
    datasourceType: 'model',
    fields: [ {} ],
    formType: 'create',
    initialValues: {},
    layout: 'horizontal',
    varPath: [ 'wddd_c1urxrm', 'wedaCreate' ],
    _parentId: 'id164',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:Form'
  },
  id239: {
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
    _parentId: 'id238',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id240: {
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
    _parentId: 'id238',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id241: {
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
    _parentId: 'id238',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id242: {
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
    _parentId: 'id238',
    _order: 4,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id243: {
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
    _parentId: 'id238',
    _order: 5,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id244: {
    style: {},
    classList: [],
    _parentId: 'id238',
    _order: 6,
    widgetType: 'gsd-h5-react:Container'
  },
  id245: {
    style: {},
    classList: [],
    appParameter: '',
    categoryId: [],
    content: '立即购买',
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
    _parentId: 'id244',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Button'
  },
  id246: {
    style: {},
    classList: [],
    _parentId: 'id244',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Divider'
  },
  id266: {
    style: {},
    classList: [],
    datasourceType: 'model',
    fields: [ {} ],
    formType: 'create',
    initialValues: {},
    layout: 'horizontal',
    varPath: [ 'cs_xvsguit', 'wedaCreate' ],
    _parentId: 'id164',
    _order: 4,
    widgetType: 'CLOUDBASE_STANDARD:Form'
  },
  id267: {
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
    _parentId: 'id266',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id268: {
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
    _parentId: 'id266',
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id269: {
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
    _parentId: 'id266',
    _order: 3,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id270: {
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
    _parentId: 'id266',
    _order: 4,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id271: {
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
    _parentId: 'id266',
    _order: 5,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id272: {
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
    _parentId: 'id266',
    _order: 6,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id273: {
    style: {},
    classList: [],
    _parentId: 'id266',
    _order: 7,
    widgetType: 'gsd-h5-react:Container'
  },
  id274: {
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
    _parentId: 'id273',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Button'
  },
  id275: {
    style: { height: '100rpx' },
    classList: [],
    _parentId: 'id154',
    _order: undefined,
    widgetType: 'gsd-h5-react:Container'
  },
  id277: {
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
    _parentId: 'id275',
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
  onid238$submit: [
    {
      key: 'c222bced',
      handler:  function({data}){ return app.showLoading(data)} ,
      data: {},
      boundData: {}
    },{
      key: 'c5ed1b1c',
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
  onid238$c5ed1b1c_success: [
    {
      key: 'efd66833',
      handler:  function({data}){ return app.hideLoading(data)} ,
      data: {},
      boundData: {}
    },{
      key: 'wapf3kngml58',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_gou_mai_jie_mian', params: {} },
      boundData: {}
    },
  ],
  onid238$c5ed1b1c_fail: [
    {
      key: '8504a72d',
      handler:  function({data}){ return app.hideLoading(data)} ,
      data: {},
      boundData: {}
    },{
      key: '68416d94',
      handler:  function({data}){ return app.showToast(data)} ,
      data: { icon: 'error', title: '提交失败' },
      boundData: {}
    },
  ],
  onid239$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid239$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid239$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid240$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid240$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid240$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid241$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid241$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid241$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid242$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid242$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid242$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid243$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid243$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid243$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid266$submit: [
    {
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
  onid266$afd5e650_success: [
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
  onid266$afd5e650_fail: [
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
  onid267$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid267$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid267$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid268$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid268$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid268$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid269$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid269$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid269$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid270$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid270$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid270$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid271$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid271$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid271$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid272$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },
  ],
  onid272$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid272$focus: [
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
      [{"groupLogic":null,"logicData":[{"key":"_id","keyType":"field","rel":"equal","value":app.dataset.state.sp_id,"valueType":"var-font","logic":null,"expression":true,"extra":{"id":"wah2uduh1fng","childId":null,"parentId":null,"type":"string","format":"","isExpression":false}}]}]
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
  id239: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164._id
    ); },
  },
  id240: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.mjmc
    ); },
  },
  id241: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.spjg
    ); },
  },
  id242: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.my_name
    ); },
  },
  id243: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.spmc
    ); },
  },
  id267: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164._id
    ); },
  },
  id268: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.mjmc
    ); },
  },
  id270: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.my_name
    ); },
  },
  id271: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.spmc
    ); },
  },
  id272: { 
    value: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id164.spjg
    ); },
  },
}

createPage('u_shang_pin_xiang_qin_1', 'u_shang_pin_xiang_qin_1', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
