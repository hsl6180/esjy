import { observable } from 'mobx'
import { createEventHandlers, createComputed } from './util'
import { createWidgets, getWidget, disposeWidget } from './widget'
import mergeRenderer from './merge-renderer'
import { runWatchers } from './watch'
import sdk from './weapp-sdk'

/**
 * Lowcodes of all components
 */
export const compLowcodes = {}

export function createComponent(key, behaviors, properties, events, handler, dataBinds, evtListeners, widgetProps, index, lifeCycle, stateFn, computedFuncs, config, libCommonRes, undefined, context) {

  compLowcodes[key] = {
    index,
    stateFn,
    computedFuncs,
    handler,
    // events,
    lib: libCommonRes,
    config,
  }

  return Component({
    options: {
      virtualHost: true,
      multipleSlots: true,
      styleIsolation: 'shared',
    },
    behaviors: behaviors,
    // externalClasses: ['class'],
    properties: {
      id: {
        type: String
      },
      style: {
        type: String
      },
      className: {
        type: String,
      },
      ...properties,
    },

    data: {},

    lifetimes: {
      created() {
        this._pageActive = true
        this._disposers = []
      },
      attached() {
        const $comp = this.getWeAppInst()
        if(!$comp) return

        $comp.props.events = createPropEvents(events, this)
        $comp.widgets = {}
        const { widgets, rootWidget: virtualRootWidget } = createWidgets(widgetProps, dataBinds, $comp.widgets, context, this)
        this._virtualRootWidget = virtualRootWidget

        try {
          lifeCycle.onAttached && lifeCycle.onAttached.call($comp)
        } catch (e) {
          console.error('Component lifecycle(attached) error', this.is, e)
        }

        this._disposers = this.initMergeRenderer(widgets)
      },
      ready() {
        const $comp = this.getWeAppInst()
        if(!$comp) return
        this._disposers.push(...runWatchers(index, this))
        lifeCycle.onReady && lifeCycle.onReady.call($comp)
      },
      detached() {
        const $comp = this.getWeAppInst()
        if(!$comp) return

        $comp.widgets = null
        $comp.node._eventListeners.clear();
        disposeWidget(this._virtualRootWidget)
        this._disposers.forEach(dispose => dispose())
        lifeCycle.onDetached && lifeCycle.onDetached.call($comp)
      }
    },

    pageLifetimes: {
      show() {
        const $comp = this.getWeAppInst()
        if(!$comp) return
        lifeCycle.onPageShow && lifeCycle.onPageShow.call($comp)
      },
      hide() {
        const $comp = this.getWeAppInst()
        if(!$comp) return
        lifeCycle.onPageHide && lifeCycle.onPageHide.call($comp)
      },
      resize(size) {
        const $comp = this.getWeAppInst()
        if(!$comp) return
        lifeCycle.onPageResize && lifeCycle.onPageResize.call($comp, size)
      }
    },

    methods: {
      ...createEventHandlers(evtListeners, context),
      ...mergeRenderer,
      getWeAppInst() {
        const $comp = this.$WEAPPS_COMP
        if ($comp) { return $comp }

        if (!this.selectOwnerComponent) {
          console.error('Fatal error: not support selectOwnerComponent API, need 2.8.2')
          return null
        }

        const owner = this.selectOwnerComponent()
        const widget = getWidget(owner.getWeAppInst().widgets, this.id)
        if (!widget || !widget.$comp) {
          console.error('Fatal error: weapps component instance not created', this.is, this.id)
        }
        widget.getDom = (fields) => this._virtualRootWidget.children[0].getDom(fields)

        this.$WEAPPS_COMP = widget.$comp
        return widget.$comp
      },
    },
    // observers: createObservers(Object.keys(properties))
  })
}

// The component instance for lowcode
export function create$comp(w) {
  const lowcode = compLowcodes[w.widgetType]
  if (!lowcode) {
    return
  }
  const libCode = w.widgetType.split(':')[0]
  const { stateFn, computedFuncs, handler, lib } = lowcode

  const $comp = {
    state: {},
    computed: {},
    widgets: {},
    node: w,
    props: {
      data: w,
      events: {},
      get style() { return w.style },
      get classList() { return w.classList },
    },
    handler: {},
    lib,
    i18n: {
      ...sdk.i18n,
      t(key, data) {
        const ns = libCode;
        return sdk.i18n.t(`${ns}:${key}`, data)
      },
    }
  }
  $comp.$WEAPPS_COMP = $comp  // TODO $comp will replaced to this.$WEAPPS_COMP
  $comp.computed = createComputed(computedFuncs, $comp)
  $comp.handler = Object.keys(handler).reduce((result, key) => {
    result[key] = handler[key].bind($comp)
    return result
  }, {})
  $comp.state = observable(stateFn.call($comp))  // May depend on this.props.data.xxx


  return $comp
}

function createObservers(props) {
  return props.reduce((observers, prop) => {
    observers[prop] = function (newVal) {
      const data = this.getWeAppInst().props.data
      if (!deepEqual(data[prop], newVal)) {
        data[prop] = newVal
      } else {
        // console.log('Same comp prop will not trigger observer', prop, newVal)
      }
    }
    return observers
  }, {})
}

function dataBindsBindContext(dataBinds, self) {
  return Object.keys(dataBinds).reduce((result, widgetId) => {
    result[widgetId] = Object.keys(dataBinds[widgetId]).reduce((result, prop) => {
      result[prop] = dataBinds[widgetId][prop].bind(self)
      return result
    }, {})
    return result
  }, {})
}

function createPropEvents(events, mpInst) {
  const protectEventKeys = [
    'touchstart', //	手指触摸动作开始
    'touchmove', //		手指触摸后移动
    'touchcancel', //		手指触摸动作被打断，如来电提醒，弹窗
    'touchend', //		手指触摸动作结束
    'tap', //		手指触摸后马上离开
    'longpress', //		手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发	1.5.0
    'longtap', //		手指触摸后，超过350ms再离开（推荐使用longpress事件代替）
    'transitionend', //		会在 WXSS transition 或 wx.createAnimation 动画结束后触发
    'animationstart', //		会在一个 WXSS animation 动画开始时触发
    'animationiteration', //		会在一个 WXSS animation 一次迭代结束时触发
    'animationend', //		会在一个 WXSS animation 动画完成时触发
    'touchforcechange', // 在支持 3D Touch 的 iPhone 设备，重按时会触发
  ]
  const result = {}
  events.forEach(evt => {
    const isProtectKey = protectEventKeys.some(key => key === evt.name)
    if (isProtectKey) {
      result[evt.name] = function () { }
    } else {
      result[evt.name] = function (evtDetail) {
        if (evt.getValueFromEvent) {
          mpInst.setData({ value: evt.getValueFromEvent({ detail: evtDetail }) })
        }
        mpInst.triggerEvent(evt.name, evtDetail)
        mpInst.getWeAppInst().node._eventListeners.emit(evt.name, evtDetail)
      }
    }
  })
  return result
}
