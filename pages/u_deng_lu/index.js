import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_deng_lu as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_deng_lu/index'
import lifecyle from '../../lowcode/u_deng_lu/lifecycle'
import state from '../../lowcode/u_deng_lu/state'
import computed from '../../lowcode/u_deng_lu/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id1: {
    style: {},
    classList: [],
    content: '',
    isDefaultButton: false,
    visible: true,
    _parentId: undefined,
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Modal'
  },
  id2: {
    style: { marginTop: '200rpx' },
    classList: [],
    language: 'zh_CN',
    size: 'large',
    text: '微信授权',
    type: 'wechat',
    usage: '昵称、头像',
    _parentId: 'id1',
    _order: 0,
    widgetType: 'gsd-h5-react:UserInfo'
  }
}
/** widget event listeners **/
const evtListeners = {
  onid1$comfirm: [
    {
      key: 'wa9n4aobgndg',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'index', params: {} },
      boundData: {}
    },
  ],
  onid1$close: [
    {
      key: 'wakebush8pj8',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'index', params: {} },
      boundData: {}
    },
  ],
  onid2$userinfosuccess: [
    {
      key: 'waphvbnac7o8',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.my_name' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail.nickName
      )},
        }
    },{
      key: 'wa6jde18idv',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.pic' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail.avatarUrl
      )},
        }
    },
  ],
  onid2$wa6jde18idv_success: [
    {
      key: 'wase337v86lo',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'index', params: {} },
      boundData: {}
    },
  ],
}
const dataBinds = {
}

createPage('u_deng_lu', 'u_deng_lu', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
