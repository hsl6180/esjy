import { observable } from 'mobx';
import { createComputed, createEventHandlers, checkAuth } from './util';
import { createWidgets, createInitData, disposeWidget } from './widget';
import mergeRenderer from './merge-renderer';
import { createDataset, EXTRA_API, createStateDataSourceVar, generateParamsParser, setConfig } from '../datasources/index';
import { runWatchers } from './watch'

export function createPage(
  id,
  uuid,
  widgetProps,
  index = {},
  lifecycle,
  pageState,
  pageComputed,
  evtListeners,
  dataBinds,
  app,
  handler,
  pageContext = {},
  context
) {
  const evtHandlers = createEventHandlers(evtListeners, context);

  function extractLifecyles() {
    const result = { };
    Object.keys(lifecycle).map(name=>{
      result[name] = function() {
        return lifecycle[name].apply(this.getWeAppInst(), arguments)
      }
    })
    // const nameMaps = [
    //   ['onReady', 'onPageReady'],
    // ];
    // nameMaps.forEach(e => {
    //   if (!result[e[0]] && result[e[1]]) {
    //     result[e[0]] = result[e[1]];
    //     delete result[e[1]];
    //   }
    // });
    return result;
  }

  return Component({
    _componentType: 'page',
    data: createInitData(widgetProps, dataBinds),
    lifetimes: {
      attached() {
        const $page = this.getWeAppInst()
        this._pageActive = true;
        this._disposers = this.initMergeRenderer($page.widgets);
      },
      detached() {
        const $page = this.getWeAppInst()
        this._pageActive = false
        disposeWidget($page._rootWidget)
        this._disposers.forEach(dispose => dispose())
      },
    },
    pageLifetimes: {
      // 组件所在页面的生命周期函数，定义下给运营平台上报用
      show: function () {
      },
      hide: function () {
      },
    },
    methods: {
      _pageActive: true,
      /** page lifecycles **/
      ...extractLifecyles(),
      ...evtHandlers,
      ...mergeRenderer,
      onLoad(options) {
        const $page = this.getWeAppInst()
        setConfig({ currentPageId: $page.uuid });
        app.activePage = $page;
        this._pageActive = true;

        let query = decodePageQuery(options || {});
        EXTRA_API.setParams($page.uuid, query);
        createStateDataSourceVar($page.uuid, generateParamsParser({ app, $page }));

        const hook = lifecycle.onLoad || lifecycle.onPageLoad;
        hook && hook.call($page, query);
      },
      onReady() {
        const $page = this.getWeAppInst()

        this._disposers.push(...runWatchers(index, this))

        const hook = lifecycle.onReady || lifecycle.onPageReady
        hook && hook.call($page)
      },
      onUnload() {
        const $page = this.getWeAppInst()

        const hook = lifecycle.onUnload || lifecycle.onPageUnload;
        hook && hook.call($page);
      },
      async onShow() {
        const $page = this.getWeAppInst()
        setConfig({ currentPageId: $page.uuid });
        app.activePage = $page;
        this._pageActive = true;

        const hook = lifecycle.onShow || lifecycle.onPageShow;
        hook && hook.call($page);

        // 权限检查
        if (await checkAuth(app, app.id, app.activePage.id)) {
          this.setData({
            weDaHasLogin: true,
          });
        }
      },
      onHide() {
        const $page = this.getWeAppInst()
        const hook = lifecycle.onHide || lifecycle.onPageHide;
        hook && hook.call($page);
        this._pageActive = false;
      },

      getWeAppInst() {
        let $page = this.$WEAPPS_PAGE
        if ($page) { return $page }
        Object.assign(pageContext, {
          id,
          uuid,
          state: observable(pageState),
          widgets: {}
        })
        $page = pageContext;
        this.$WEAPPS_PAGE = $page
        $page.handler = Object.keys(handler).reduce((result, key) => {
          result[key] = handler[key].bind($page)
          return result
        }, {})
        $page.computed = createComputed(pageComputed, $page)
        let dataset = createDataset($page.uuid);
        $page.dataset = dataset;
        $page.state.dataset = dataset;
        $page.setState = (userSetState) => {
          Object.keys(userSetState).forEach((keyPath) => {
            app.utils.set($page.dataset.state, keyPath, userSetState[keyPath]);
          });
        };

        const { rootWidget } = createWidgets(widgetProps, dataBinds, $page.widgets, context, this)
        $page._rootWidget = rootWidget

        return $page
      },
    },
  });
}

function decodePageQuery(query) {
  return Object.keys(query)
    .reduce((decoded, key) => {
      decoded[key] = decodeURIComponent(query[key]);
      return decoded;
    }, {});
}
