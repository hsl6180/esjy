import handleEvents from '../../utils/handleEvents';

Component({
  options: {
    virtualHost: true,
  },
  properties: {
    id: {
      type: String,
      value: '',
    },
    className: {
      type: String,
      value: '',
    },
    style: {
      type: String,
      value: '',
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
    scrollX: {
      type: Boolean,
      default: false,
    },
    upperThreshold: {
      type: Number,
      default: 50,
    },
    lowerThreshold: {
      type: Number,
      default: 50,
    },
    scrollTop: {
      type: Number,
    },
    scrollLeft: {
      type: Number,
    },
    scrollIntoView: {
      type: String,
    },
    scrollWithAnimation: {
      type: Boolean,
      default: false,
    },
    enableBackToTop: {
      type: Boolean,
      default: false,
    },
    enableFlex: {
      type: Boolean,
      default: false,
    },
    scrollAnchoring: {
      type: Boolean,
      default: false,
    },
    refresherEnabled: {
      type: Boolean,
      default: false,
    },
    refresherThreshold: {
      type: Number,
      default: 50,
    },
    refresherDefaultStyle: {
      type: String,
      default: 'block',
    },
    refresherBackground: {
      type: String,
      default: '#fff',
    },
    refresherTriggered: {
      type: Boolean,
      default: false,
    },
    enhanced: {
      type: Boolean,
      default: false,
    },
    bounces: {
      type: Boolean,
      default: true,
    },
    showScrollbar: {
      type: Boolean,
      default: true,
    },
    pagingEnabled: {
      type: Boolean,
      default: false,
    },
    fastDeceleration: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...handleEvents([
      { name: 'scroll', title: '滚动时触发' },
      { name: 'scrolltolower', title: '滚动到底部/右边时触发' },
      { name: 'scrolltoupper', title: '滚动到顶部/左边时触发' },
      {
        name: 'dragstart',
        title: '滑动开始事件(同时开启 enhanced 属性后生效)',
      },
      { name: 'dragging', title: '滑动事件(同时开启 enhanced 属性后生效)' },
      { name: 'dragend', title: '滑动结束事件(同时开启 enhanced 属性后生效)' },
      { name: 'refresherpulling', title: '自定义下拉刷新控件被下拉' },
      { name: 'refresherrefresh', title: '自定义下拉刷新被触发' },
      { name: 'refresherrestore', title: '自定义下拉刷新被复位' },
      { name: 'refresherabort', title: '自定义下拉刷新被中止' },
    ]),
  },
});
