Component({
  options: {
    virtualHost: true,
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
    label: {
      type: String,
      value: '标题',
    },
    labelVisible: {
      type: Boolean,
      value: true,
    },
    defaultValue: {
      type: String,
      value: '',
    },
    password: {
      type: Boolean,
      value: false,
    },
    placeholder: {
      type: String,
      value: '请输入',
    },
    type: {
      type: String,
      value: 'text',
    },
    maxLength: {
      type: Number,
      value: 140,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    focus: {
      type: Boolean,
      value: false,
    },
    layout: {
      type: String,
      value: 'horizontal',
    },
    requiredFlag: {
      type: Boolean,
      value: false,
    },
    clearable: {
      type: Boolean,
      value: true
    }
  },
  data: {
    isFlex: true,
    isFocus: false,
    value: '',
  },
  lifetimes: {
    attached() {
      this.setData({
        isFlex: this.properties.layout !== 'vertical',
        isFocus: this.properties.focus,
      });
    },
  },
  observers: {
    'defaultValue': function (defaultValue) {
      this.setData({ value: defaultValue });
    },
  },
  methods: {
    handleFocus: function (e) {
      this.setData({
        isFocus: true,
      });
      this.triggerEvent('change', e.detail);
    },
    handleBlur: function (e) {
      this.setData({
        isFocus: false,
      });
      this.triggerEvent('blur', e.detail);
    },
    handleChange: function (e) {
      this.setData({
        value: e.detail.value,
      });
      this.triggerEvent('change', e.detail);
    },
    handleClear: function (e) {
      this.setData({
        value: '',
      });
      this.triggerEvent('clear', e.detail);
    },
    handleConfirm: function (e) {
      this.triggerEvent('confirm', e.detail);
    },
  },
});
