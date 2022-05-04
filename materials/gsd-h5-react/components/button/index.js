import classNames from '../../utils/classnames';
import handleEvents from '../../utils/handleEvents';

Component({
  options: {
    virtualHost: true,
    multipleSlots: true,
  },
  properties: {
    className: {
      type: String,
      value: '',
    },
    style: {
      type: String,
      value: '',
    },
    text: {
      type: String,
      value: '按钮',
    },
    size: {
      type: String,
      value: 'default',
    },
    type: {
      type: String,
      value: 'primary',
    },
    loading: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    formType: {
      type: String,
    },
    openType: {
      type: String,
    },
  },
  data: {
    cls: '',
  },
  methods: {
    ...handleEvents([
      { title: '点击', name: 'tap' },
      { title: '获取手机号', name: 'getPhoneNumber' },
      { title: '打开客服会话', name: 'contact' },
      { title: '获取用户信息', name: 'getUserInfo' },
      { title: '打开App', name: 'launchApp' },
      { title: '打开授权设置', name: 'openSetting' },
    ]),
  },
  observers: {
    'className,size,type,disabled': function (className, size, type, disabled) {
      const cls = classNames('weda-ui', {
        'weda-button': true,
        'weui-btn': true,
        'weui-btn_mini': size === 'mini',
        'weui-btn_large': size === 'large',
        'weui-btn_primary': type === 'primary',
        'weui-btn_default': type === 'default',
        'weui-btn_warn': type === 'warn',
        'weui-btn_disabled': disabled,
        [className]: className,
      });

      this.setData({ cls });
    },
  },
});
