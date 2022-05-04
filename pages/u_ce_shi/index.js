import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { u_ce_shi as handlers } from '../../app/handlers'
// import index from '../../lowcode/u_ce_shi/index'
import lifecyle from '../../lowcode/u_ce_shi/lifecycle'
import state from '../../lowcode/u_ce_shi/state'
import computed from '../../lowcode/u_ce_shi/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {}
/** widget event listeners **/
const evtListeners = {
}
const dataBinds = {
}

createPage('u_ce_shi', 'u_ce_shi', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
