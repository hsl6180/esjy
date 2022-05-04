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
    content: {
      type: String,
      value: '',
    },
    visible: {
      type: Boolean,
      value: true,
    },
    isDefaultButton: {
      type: Boolean,
      value: true,
    },
  },
  methods: {
    ...handleEvents([
      { name: 'close', title: '窗口关闭' },
      { name: 'confirm', title: '默认按钮点击' },
    ]),
  },
});
