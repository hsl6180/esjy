import classNames from '../../../utils/classnames';
import destr from '../../../utils/destr';

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
    async getPhoneNumber(e) {
      if (e?.detail?.errMsg?.includes('fail')) {
        this.triggerEvent('phonefail', e.detail);
        return;
      }
      if (!e?.detail?.code) {
        console.warn(`基础库版本过低，获取手机号失败`);
        this.triggerEvent('phonefail', {
          errMsg: '基础库版本过低，获取手机号失败',
        });
        return;
      }
      const { app } = getApp();
      const callWedaApi = app?.cloud?.callWedaApi;
      if (!callWedaApi) {
        console.warn(`当前环境缺少方法 app.cloud.callWedaApi`);
        this.triggerEvent('phonefail', {
          errMsg: '当前环境缺少方法 app.cloud.callWedaApi，获取手机号失败',
        });
        return;
      }
      const res = await callWedaApi({
        action: 'InvokeComponentWxModule',
        data: {
          WxRemoteMethod: 'GetPhoneNumber',
          Method: 'InvokeComponentWxData',
          ReqBody: JSON.stringify({ code: e?.detail?.code }),
        },
      });
      if (!res?.Data) {
        this.triggerEvent('phonefail', { errMsg: '获取手机号失败' });
        return;
      }
      const parseData = destr(res?.Data) || {};
      const { phone_info } = parseData;
      if (!phone_info) {
        this.triggerEvent('phonefail', { errMsg: '获取手机号失败' });
        return;
      }
      this.triggerEvent('phonesuccess', {
        ...phone_info,
        timestamp: phone_info?.watermark?.timestamp || '',
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
