import classNames from '../../../utils/classnames';

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
    id: {
      type: String,
      value: '',
    },
    text: {
      type: String,
      value: '按钮标题',
    },
    size: {
      type: String,
      value: 'default',
    },
    type: {
      type: String,
      value: 'wechat',
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
      value: 'getPhoneNumber',
    },
  },
  data: {
    cls: '',
  },
  methods: {
    async getPhoneCodeNumber(e) {
      if (e?.detail?.errMsg?.includes('fail')) {
        this.triggerEvent('phoneCodeFail', e.detail);
        return;
      }
      if (!e?.detail?.code) {
        console.warn(`基础库版本过低，获取手机号授权令牌失败`);
        this.triggerEvent('phoneCodeFail', {
          errMsg: '基础库版本过低，获取手机号授权令牌失败',
        });
        return;
      }
      const { code } = e.detail;
      this.triggerEvent('phoneCodeSuccess', {
        code,
      });
    },
  },
  observers: {
    'className,size,type,disabled': function (className, size, type, disabled) {
      const cls = classNames('weda-ui', {
        'weda-button': true,
        'weui-btn': true,
        'weui-btn_mini': size === 'mini',
        'weui-btn_large': size === 'large',
        'weui-btn_primary': type === 'primary' || type === 'wechat',
        'weui-btn_default': type === 'default',
        'weui-btn_warn': type === 'warn',
        'weui-btn_wechat': type === 'wechat',
        'weui-btn_disabled': disabled,
        [className]: className,
      });

      this.setData({ cls });
    },
  },
});
