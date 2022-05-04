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
    datasource: {
      type: Object,
      value: {},
    },
    where: {
      type: Array,
      value: [],
    },
  },
  data: {
    innerBeforeDataChange: function (values) {
      return values?.[0];
    },
  },
  methods: {
    handleEvent: function (params) {
      const { type, detail } = params || {};
      type && this.triggerEvent(type, detail);
    },
  },
});
