import * as echarts from '../common/lib/echarts.min';
import EchartBar from '../common/core/eChartBar';
Component({
  options: {
    virtualHost: true,
    multipleSlots: true,
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
    directionType: {
      // 柱状图方向
      type: String,
      value: 'lengthways',
    },
    isPile: {
      // 柱状图方向
      type: Boolean,
      value: false,
    },
    title: {
      // 图表标题
      type: String,
    },
    isTitle: {
      // 是否显示标题
      type: Boolean,
      value: false,
    },
    titleLocation: {
      type: String,
      value: 'top',
    },
    dataSource: {
      // 数据源
      type: Object,
    },
    filterData: {
      // 数据筛选
      type: Array,
      value: [],
    },
    setColor: {
      // 设置颜色
      type: Array,
      value: [],
    },
    xField: {
      // x轴字段选择
      type: Object,
      value: {
        format: '',
        type: '', // 数据源字段 类型
        title: '', // 字段名中文
        name: '', // 字段名英文
      },
    },
    xStatistics: {
      // x轴统计维度
      type: String,
      value: '', // 统计纬度, 只有选择时间类型才有，y 年，m月，d 日，w周，h时，min 分，s秒
    },
    groupKey: {
      // x轴字段选择
      type: Object,
      value: {
        format: '',
        type: '', // 数据源字段 类型
        title: '', // 字段名中文
        name: '', // 字段名英文
      },
    },
    groupKeyTimeSpan: {
      // x轴统计维度
      type: String,
      value: '', // 统计纬度, 只有选择时间类型才有，y 年，m月，d 日，w周，h时，min 分，s秒
    },
    xIsCountEmpty: {
      // x轴 是否统计空值
      type: Boolean,
      value: false,
    },
    yField: {
      // Y轴字段，分组字段，是否分组
      type: Object,
      value: {
        numValue: [{ key: '', operationType: '' }],
        groupKey: '',
      },
    },
    isLegend: {
      // 是否显示图例
      type: Boolean,
      value: false,
    },
    legend: {
      // 图例
      type: String,
      value: 'bottom', //  上top，下 bottom
    },

    // 高级属性
    isXaxisName: {
      // 是否显示坐标轴名称
      type: Boolean,
      value: true,
    },
    xAxisName: {
      // 是否显示坐标轴名称
      type: String,
      value: '',
    },
    isXaxisAxisLabelShow: {
      // 是否显示标签
      type: Boolean,
      value: true,
    },
    isXaxisAxisTickShow: {
      // 显示X轴刻度线
      type: Boolean,
      value: true,
    },
    isXaxisAxisLabelRotate: {
      // 文字自动倾斜
      type: Boolean,
      value: false,
    },
    isYAxisShow: {
      // 是否显示 Y 轴刻度线
      type: Boolean,
      value: true,
    },
    isYAxisName: {
      // 是否显示 Y坐标轴名称
      type: Boolean,
      value: true,
    },
    isYAxisSplitlineLinestyleWidth: {
      // 是否显示网格线 ,yAxis.splitLine.lineStyle.width设置为0
      type: Boolean,
      value: true,
    },
    yAxisSplitlineLinestyleType: {
      // 网格线线条类型 solid,dashed,dotted
      type: String,
      value: 'dashed',
    },
    yAxisName: {
      // Y坐标轴名称  显示名称后需要设置居中，轴线距离属性 yAxis.nameLocation='middle' yAxis.nameGap =20
      type: String,
      value: '',
    },
    yAxisMin: {
      // Y轴刻度最小值
      type: Number,
      value: 0,
    },
    yAxisMax: {
      // Y轴刻度最大值, 切记如果为0时，则不设置
      type: Number,
      value: 0,
    },
    isSeriesShowSymbol: {
      // 是否显示数据标签 开启后 属性 series.label.show 要同时设置为true
      type: Boolean,
      value: true,
    },
    isUnit: {
      // 显示单位
      type: Boolean,
      value: false,
    },
    unit: {
      // 数字显示的单位 百分比，千分比，千，万，百万，亿，十亿
      type: String,
      value: '%',
    },
    decimalDigits: {
      // 小数位数
      type: Number,
      value: 0,
    },
    suffix: {
      // 后缀
      type: String,
      value: '',
    },

  },
  data: {
    ec: {},
    canvas_id: {
      type: String,
      value: `canvas_bar_${Date.now()}_${Math.random() * 100}`,
    },
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.initData();
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached() {
    // 在组件实例进入页面节点树时执行
    this.initData();
  },
  detached() {
    // 在组件实例被从页面节点树移除时执行
  },
  observers: {
    // 当参数变化时
    '**': async function() {
      const objEChartBar = new EchartBar();
      await objEChartBar.setOptions(this.properties);
      const options = await objEChartBar.getOptions();
      this._chart && this._chart.setOption(options);
    },
  },
  methods: {
    initData() {
      this.setData({
        ec: {
          onInit: this.initChart.bind(this),
        },
      });
    },
    async initChart(canvas, width, height, dpr) {
      const objEchart = echarts.init(canvas, null, {
        width,
        height,
        devicePixelRatio: dpr,
      });
      canvas.setChart(objEchart);
      const objEChartBar = new EchartBar();
      await objEChartBar.setOptions(this.properties);
      const options = await objEChartBar.getOptions();
      // objEchart.clear();
      console.log('设置前参数bar', options);
      objEchart.setOption(options);
      this._chart = objEchart;
      return objEchart;
    },
  },
});
