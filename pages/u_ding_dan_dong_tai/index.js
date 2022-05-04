import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_ding_dan_dong_tai as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_ding_dan_dong_tai/index'
import lifecyle from '../../lowcode/u_ding_dan_dong_tai/lifecycle'
import state from '../../lowcode/u_ding_dan_dong_tai/state'
import computed from '../../lowcode/u_ding_dan_dong_tai/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id3: {
    style: {},
    classList: [],
    _parentId: undefined,
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id1: {
    style: {},
    classList: [],
    acceptTypes: 'lengthwaysTextRight',
    descriptionFontColor: 'rgba(0,0,0,0.6)',
    descriptionFontSize: 24,
    descriptionValue: 'description',
    iconValue: 'icon',
    pointIdValue: '_id',
    pointType: 'solidType',
    remarkFontColor: 'rgba(0,0,0,0.4)',
    remarkFontSize: 24,
    remarkValue: 'remark',
    titleFontColor: '#0052D9',
    titleFontSize: 28,
    titleValue: 'title',
    _parentId: 'id3',
    _order: 1,
    widgetType: 'CLOUDBASE_STANDARD:Timeline'
  },
  id6: {
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
}
const dataBinds = {
  id1: { 
    showList: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $page.dataset.state.timeLineShow
    ); },
  },
}

createPage('u_ding_dan_dong_tai', 'u_ding_dan_dong_tai', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
