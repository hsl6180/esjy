'use strict';
import { findForItemsOfWidget, getWidget } from './widget'
import lodashGet from 'lodash.get';
import lodashSet from 'lodash.set';

/**
 * Convert abcWordSnd -> abc-word-snd
 */
export function toDash(str) {
  return str.replace(/[A-Z]/g, upperLetter => `-${upperLetter.toLowerCase()}`)
}

export function createComputed(funcs, bindContext = null) {
  const computed = {}
  for (const name in funcs) {
    Object.defineProperty(computed, name, {
      get() {
        try {
          return bindContext ? funcs[name].call(bindContext) : funcs[name]()
        } catch (e) {
          console.error('Computed error', e)
        }
      },
      enumerable: true
    })
  }
  return computed
}

export function createEventHandlers(evtListeners, context) {
  const evtHandlers = {}
  for (const name in evtListeners) {
    const listeners = evtListeners[name]
    evtHandlers[name] = function (event) {
      const self = this
      const owner = this.getWeAppInst()
      const target = getWidget(owner.widgets, event.target.id)
      const currentTarget = getWidget(owner.widgets, event.currentTarget.id)
      event.target = target
      event.currentTarget = currentTarget
      const [prefix = ''] = name.split('$')
      // The page event handler
      const { lists = [], itemsById = {} } = findForItemsOfWidget(currentTarget) || {}
      listeners.forEach(async l => {
        let { data = {}, boundData = {} } = l
        data = { ...data }
        for (const k in boundData) {
          set(data, k, boundData[k].call(owner, owner, lists, itemsById, event, context))
        }
        try {
          let res = await l.handler.call(owner, { event, lists, forItems: itemsById, data })
          let eventName = prefix && l.key ? `${prefix}$${l.key}_success` : ''
          self[eventName] && self[eventName]({
            ...event,
            detail: res
          })
        } catch (e) {
          let eventName = l.key ? `${l.key}_fail` : ''
          if (self[eventName]) {
            await self[eventName]({
              ...event,
              detail: e
            })
          } else {
            throw e
          }

        }
      })
    }
  }
  return evtHandlers
}

export function getDeep(target, key, keySeparator = '.') {
  if (key == null) {
    return target
  }
  const keys = (key + '').split(keySeparator)
  while (keys.length > 0 && target != null) {
    target = target[keys.shift()]
  }
  return keys.length === 0 ? target : undefined
}

/**
 * Touch all props of given object deeply
 */
export function touchObj(obj) {
  if (!obj) {
    return
  }
  if (typeof obj === 'string') {
    return
  }
  if (Array.isArray(obj)) {
    obj.forEach(touchObj)
  } else if (obj) {
    Object.keys(obj).forEach(key => touchObj(obj[key]))
  }
}

export function throttle(fn, limit) {
  let lastExecTime = 0
  let timer = null

  function invoke() {
    lastExecTime = Date.now()
    timer = null
    fn()
  }

  const throttled = function () {
    const idledDuration = Date.now() - lastExecTime
    if (idledDuration >= limit) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      invoke()
    } else if (!timer) {
      timer = setTimeout(invoke, limit - idledDuration)
    }
  }
  return throttled
}

export function deepEqual(a, b) {
  if (a === b) {
    return true
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) {
        return false
      }
    }
    return true
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const aProps = Object.keys(a), bProps = Object.keys(b)
    if (!deepEqual(aProps, bProps)) {
      return false
    }
    for (let i = 0; i < aProps.length; i++) {
      const prop = aProps[i]
      if (!deepEqual(a[prop], b[prop])) {
        return false
      }
    }
    return true
  }
  return false
}

function isObject(value) {
  var type = typeof value
  return !!value && (type == 'object' || type == 'function')
}

function isIndex(value, length) {
  length = length == null ? 9007199254740991 : length
  return (
    !!length &&
    (typeof value == 'number' || /^(?:0|[1-9]\d*)$/.test(value)) &&
    value > -1 &&
    value % 1 == 0 &&
    value < length
  )
}

function assignValue(object, key, value) {
  var objValue = object[key]
  if (
    !(
      Object.hasOwnProperty.call(object, key) &&
      (objValue === value || (objValue !== objValue && value !== value))
    ) ||
    (value === undefined && !(key in object))
  ) {
    object[key] = value
  }
}

export function set(object, path, value) {
  if (!isObject(object)) {
    return object
  }
  path = path.split('.')

  var index = -1,
    length = path.length,
    lastIndex = length - 1,
    nested = object

  while (nested != null && ++index < length) {
    var key = path[index],
      newValue = value

    if (index != lastIndex) {
      var objValue = nested[key]
      newValue = undefined
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : isIndex(path[index + 1])
            ? []
            : {}
      }
    }
    assignValue(nested, key, newValue)
    nested = nested[key]
  }
  return object
}

/*
根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
*/
export function getter(context, path, defaultValue = undefined) {
  return lodashGet(context, path, defaultValue);
}

/*
设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。 使用_.setWith 定制path创建
*/
export function setter(context, path, value = undefined) {
  return lodashSet(context, path, value);
}

/**
 * 检查页面权限
 **/
export async function checkAuth(app, appId, pageId) {
  return true
  app.showNavigationBarLoading();
  const checkAuthResult = await app.cloud.callWedaApi({
    action: 'DescribeResourcesPermission',
    data: {
      ResourceType: `app`,
      ResourceIdList: [`${appId}-${pageId}`],
    },
  });
  let isLogin = false;
  if (Array.isArray(checkAuthResult) && checkAuthResult.length > 0) {
    isLogin = checkAuthResult[0]?.IsAccess || false;
  }
  app.hideNavigationBarLoading();

  if (!isLogin) {
    app.showToast({
      title: '页面无访问权限',
      icon: 'error',
    });
  }
  return isLogin;
}

// 日期转换
class CustomDate {
  constructor() {
    this.i18n = {
      dayNames: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      monthNames: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
    };
    this.masks = {
      default: 'ddd mmm dd yyyy HH:MM:ss',
      shortDate: 'm/d/yy',
      paddedShortDate: 'mm/dd/yyyy',
      mediumDate: 'mmm d, yyyy',
      longDate: 'mmmm d, yyyy',
      fullDate: 'dddd, mmmm d, yyyy',
      shortTime: 'h:MM TT',
      mediumTime: 'h:MM:ss TT',
      longTime: 'h:MM:ss TT Z',
      isoDate: 'yyyy-mm-dd',
      isoTime: 'HH:MM:ss',
      isoDateTime: 'yyyy-mm-dd\'T\'HH:MM:sso',
      isoUtcDateTime: 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
      expiresHeaderFormat: 'ddd, dd mmm yyyy HH:MM:ss Z',
    };
    this.token = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g;
    this.timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
    this.timezoneClip = /[^-+\dA-Z]/g;
  }

  /*
  *
 | Name              | Mask                           | Example                  |
 | ----------------- | ------------------------------ | ------------------------ |
 | `default`         | `ddd mmm dd yyyy HH:MM:ss`     | Sat Jun 09 2007 17:46:21 |
 | `shortDate`       | `m/d/yy`                       | 6/9/07                   |
 | `paddedShortDate` | `mm/dd/yyyy`                   | 06/09/2007               |
 | `mediumDate`      | `mmm d, yyyy`                  | Jun 9, 2007              |
 | `longDate`        | `mmmm d, yyyy`                 | June 9, 2007             |
 | `fullDate`        | `dddd, mmmm d, yyyy`           | Saturday, June 9, 2007   |
 | `shortTime`       | `h:MM TT`                      | 5:46 PM                  |
 | `mediumTime`      | `h:MM:ss TT`                   | 5:46:21 PM               |
 | `longTime`        | `h:MM:ss TT Z`                 | 5:46:21 PM EST           |
 | `isoDate`         | `yyyy-mm-dd`                   | 2007-06-09               |
 | `isoTime`         | `HH:MM:ss`                     | 17:46:21                 |
 | `isoDateTime`     | `yyyy-mm-dd'T'HH:MM:sso`       | 2007-06-09T17:46:21+0700 |
 | `isoUtcDateTime`  | `UTC:yyyy-mm-dd'T'HH:MM:ss'Z'` | 2007-06-09T22:46:21Z     |
 *
 */
  format(date, mask, utc, gmt) {
    let newMask = mask;
    let newDate = date;
    let newUtc = utc;
    let newGmt = gmt;
    if (arguments.length === 1 && this._kindOf(newDate) === 'string' && !/\d/.test(newDate))
      newDate = undefined;
    newDate = newDate || newDate === 0 ? newDate : new Date();
    if (!(newDate instanceof Date))
      newDate = new Date(newDate);
    if (isNaN(newDate))
      throw TypeError('Invalid date');
    newMask = String(this.masks[newMask] || newMask || this.masks['default']);
    const maskSlice = newMask.slice(0, 4);
    if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
      newMask = newMask.slice(4);
      newUtc = true;
      if (maskSlice === 'GMT:')
        newGmt = true;
    }
    const _ = newUtc ? 'getUTC' : 'get';
    const _d = newDate[`${_}Date`]();
    const D = newDate[`${_}Day`]();
    const _m = newDate[`${_}Month`]();
    const y = newDate[`${_}FullYear`]();
    const _H = newDate[`${_}Hours`]();
    const _M = newDate[`${_}Minutes`]();
    const _s = newDate[`${_}Seconds`]();
    const _L = newDate[`${_}Milliseconds`]();
    const _o = newUtc ? 0 : newDate.getTimezoneOffset();
    const _W = this._getWeek(newDate);
    const _N = this._getDayOfWeek(newDate);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    // @ts-ignore
    // @ts-ignore
    const flags = {
      d: () => _d,
      dd: () => self._pad(_d),
      ddd: () => self.i18n.dayNames[D],
      DDD: () => self._getDayName({ y, m: _m, d: _d, _, dayName: self.i18n.dayNames[D], short: true }),
      dddd: () => self.i18n.dayNames[D + 7],
      DDDD: () => self._getDayName({ y: y, m: _m, d: _d, _: _, dayName: self.i18n.dayNames[D + 7] }),
      m: () => _m + 1,
      mm: () => self._pad(_m + 1),
      mmm: () => self.i18n.monthNames[_m],
      mmmm: () => self.i18n.monthNames[_m + 12],
      yy: () => String(y)
        .slice(2),
      yyyy: () => self._pad(y, 4),
      h: () => _H % 12 || 12,
      hh: () => self._pad(_H % 12 || 12),
      H: () => _H,
      HH: () => self._pad(_H),
      M: () => _M,
      MM: () => self._pad(_M),
      s: () => _s,
      ss: () => self._pad(_s),
      l: () => self._pad(_L, 3),
      L: () => self._pad(Math.floor(_L / 10)),
      t: () => (_H < 12 ? self.i18n.timeNames[0] : self.i18n.timeNames[1]),
      tt: () => (_H < 12 ? self.i18n.timeNames[2] : self.i18n.timeNames[3]),
      T: () => (_H < 12 ? self.i18n.timeNames[4] : self.i18n.timeNames[5]),
      TT: () => (_H < 12 ? self.i18n.timeNames[6] : self.i18n.timeNames[7]),
      // eslint-disable-next-line no-nested-ternary
      Z: () => newGmt ? 'GMT' : newUtc ? 'UTC' : (String(newDate)
        .match(self.timezone) || ['']).pop()
        .replace(self.timezoneClip, '')
        .replace(/GMT\+0000/g, 'UTC'),
      o: () => (_o > 0 ? '-' : '+') + self._pad(Math.floor(Math.abs(_o) / 60) * 100 + (Math.abs(_o) % 60), 4),
      p: () => `${(_o > 0 ? '-' : '+') + self._pad(Math.floor(Math.abs(_o) / 60), 2)}:${self._pad(Math.floor(Math.abs(_o) % 60), 2)}`,
      // @ts-ignore
      S: () => ['th', 'st', 'nd', 'rd'][_d % 10 > 3 ? 0 : (((_d % 100) - (_d % 10) != 10) * _d) % 10],
      W: () => _W,
      WW: () => self._pad(_W),
      N: () => _N,
    };
    return mask.replace(this.token, (match) => {
      if (match in flags) {
        return flags[match]();
      }
      return match.slice(1, match.length - 1);
    });
  }

  _pad(val, len) {
    let newVal = String(val);
    const newLen = len || 2;
    while (newVal.length < newLen) {
      newVal = `0${newVal}`;
    }
    return newVal;
  }

  _getDayName(_ref) {
    const { y, m, d, _, dayName } = _ref;
    const _ref$short = _ref['short'];
    const _short = _ref$short === void 0 ? false : _ref$short;
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday[`${_}Date`]() - 1);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow[`${_}Date`]() + 1);
    const today_d = function today_d() {
      return today[`${_}Date`]();
    };
    const today_m = function today_m() {
      return today[`${_}Month`]();
    };
    const today_y = function today_y() {
      return today[`${_}FullYear`]();
    };
    const yesterday_d = function yesterday_d() {
      return yesterday[`${_}Date`]();
    };
    const yesterday_m = function yesterday_m() {
      return yesterday[`${_}Month`]();
    };
    const yesterday_y = function yesterday_y() {
      return yesterday[`${_}FullYear`]();
    };
    const tomorrow_d = function tomorrow_d() {
      return tomorrow[`${_}Date`]();
    };
    const tomorrow_m = function tomorrow_m() {
      return tomorrow[`${_}Month`]();
    };
    const tomorrow_y = function tomorrow_y() {
      return tomorrow[`${_}FullYear`]();
    };
    if (today_y() === y && today_m() === m && today_d() === d) {
      return _short ? 'Tdy' : 'Today';
    }
    if (yesterday_y() === y && yesterday_m() === m && yesterday_d() === d) {
      return _short ? 'Ysd' : 'Yesterday';
    }
    if (tomorrow_y() === y && tomorrow_m() === m && tomorrow_d() === d) {
      return _short ? 'Tmw' : 'Tomorrow';
    }
    return dayName;
  }

  _getWeek(date) {
    const targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);
    const firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
    firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);
    const ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
    targetThursday.setHours(targetThursday.getHours() - ds);
    const weekDiff = (targetThursday - firstThursday) / (864e5 * 7);
    return 1 + Math.floor(weekDiff);
  }

  _getDayOfWeek(date) {
    let dow = date.getDay();
    if (dow === 0) {
      dow = 7;
    }
    return dow;
  }

  _kindOf(val) {
    if (val === null) {
      return 'null';
    }
    if (val === undefined) {
      return 'undefined';
    }
    if (this._typeof(val) !== 'object') {
      return this._typeof(val);
    }
    if (Array.isArray(val)) {
      return 'array';
    }
    return {}.toString
      .call(val)
      .slice(8, -1)
      .toLowerCase();
  }

  _typeof(obj) {
    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
      this._typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      this._typeof = function _typeof(obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };
    }
    return this._typeof(obj);
  }
}

const dataInstance = new CustomDate();
export const formatDate = new CustomDate().format.bind(dataInstance);
export const utils = {
  formatDate,
  get: getter,
  set: setter,
};
