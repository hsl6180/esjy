import classNames from '../../../utils/classnames';
import dayjs from '../../../utils/dayjs.min.js';
import { getRegionTree, buildDisplayValue , provinces, cities, regions } from './region/index';
import destr from '../../../utils/destr';
import { callDataSourceApi, callWedaApi } from '../../../utils/tcb';
import { REL_DICT } from '../../../utils/constant';
import { isNil } from '../../../utils/lodash';

const getWhereList = (where) => {
  let result = [];
  Array.isArray(where) &&
    where.forEach((item1) => {
      if (item1?.groupLogic !== 'or' && Array.isArray(item1?.logicData)) {
        item1?.logicData.forEach((item2) => {
          let [rel, val] = [REL_DICT[item2?.rel], item2?.value];
          if ('_begin_with' === rel) {
            rel = 'regex';
            val = `^${val}`;
          }
          if ('_exclude' === rel) {
            rel = 'regex';
            val = `^((?!${val}).)*$`;
          }
          if (item2?.logic !== 'or' && item2?.key && rel && !isNil(val)) {
            result.push({ key: item2.key, rel, val });
          }
        });
      }
    });
  return result;
};

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
    placeholder: {
      type: String,
      value: '请选择',
    },
    layout: {
      type: String,
      value: 'horizontal',
    },
    mode: {
      type: String,
      value: 'selector',
    },
    dateMode: {
      type: String,
      value: 'day',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    regionType: {
      type: String,
      value: ''
    },
    range: {
      type: Array,
      value: [
        {
          name: '选项一',
          value: 'first',
        },
        {
          name: '选项二',
          value: 'second',
        },
      ],
    },
    defaultValue: {
      type: String,
    },
    startTime: {
      type: String,
      optionalTypes: [Number],
    },
    endTime: {
      type: String,
      optionalTypes: [Number],
    },
    defaultTime: {
      type: String,
      optionalTypes: [Number],
    },
    startDate: {
      type: String,
      optionalTypes: [Number],
    },
    endDate: {
      type: String,
      optionalTypes: [Number],
    },
    defaultDate: {
      type: String,
      optionalTypes: [Number],
    },
    defaultRegion: {
      type: Array,
    },
    defaultMutiRegion: {
      type: String,
      value: ''
    },
    separator: {
      type: String,
      value: ',',
    },
    requiredFlag: {
      type: Boolean,
      value: false,
    },
    format: {
      type: String,
      value: '',
    },
    dataSourceName: {
      type: String,
      value: '',
    },
    viewId: {
      type: String,
      value: '',
    },
    primaryField: {
      type: String,
      value: '',
    },
    enumName: {
      type: String,
      value: '',
    },
    where: {
      type: Array,
      value: []
    }
  },
  data: {
    cls: '',
    subCls: '',
    selectRange: [],
    start: '',
    end: '',
    value: '',
    displayValue: '',
    displayCls: '',
    //省市级联动数据
    multiArray: [[{ value: '地区数据加载中，请关闭弹窗后重试' }]],
    multiIndex: [0, 0, 0], // 默认的下标
    records: [],
    option: [{ label: '', value: '' }],
    whereEffected: []
  },
  lifetimes: {
    attached() {
      const {
        className,
        layout,
        disabled,
        mode,
        range,
        startTime,
        endTime,
        startDate,
        endDate,
        dateMode,
        defaultDate,
        format,
      } = this.properties;
      const isFlex = layout !== 'vertical';
      const cls = classNames({
        'weda-ui': true,
        'weda-select': true,
        [className]: className,
      });
      const subCls = classNames({
        'weui-cell': true,
        'weui-cell_active': true,
        'weui-cell_form': true,
        'weui-flex__item': isFlex,
        'weui-cell_disabled': disabled,
      });

      let selectRange, start, end, displayValue;

      switch (mode) {
        case 'selector': {
          if (format === 'related' || format === 'father-son' || format === 'x-enum') {
            selectRange = this.data.option.map((item) => item.label);
          } else {
            selectRange = range.map((item) => item.label);
          }
          break;
        }
        case 'time': {
          start = startTime
            ? this.converTime2Dayjs(startTime).format('HH:mm')
            : undefined;
          end = endTime
            ? this.converTime2Dayjs(endTime).format('HH:mm')
            : undefined;
          break;
        }
        case 'date': {
          start = this._coverNumber2Date(startDate, dateMode);
          end = this._coverNumber2Date(endDate, dateMode);
          displayValue = this._coverNumber2Date(defaultDate, dateMode);
          break;
        }
        case 'region': {
          break;
        }
        case 'mutiRegion': {
          this.getProvince();
          break;
        }
        default: {
          break;
        }
      }
      this.setData({
        cls,
        subCls,
        selectRange,
        start,
        end,
        displayValue,
      });
    },
  },
  observers: {
    'defaultValue, defaultTime, defaultRegion,defaultMutiRegion,defaultDate': function (
      defaultValue,
      defaultTime,
      defaultRegion,
      defaultMutiRegion,
      defaultDate
    ) {
      const { range, mode, separator, placeholder, dateMode, format, option } =
        this.properties;
      let value, displayValue;
      switch (mode) {
        case 'selector': {
          // TODO: == 故意的
          if (format !== 'father-son' && format !== 'related' && format !== 'x-enum') {
            const index = range.findIndex((item) => item.value == defaultValue);
            value = index < 0 ? '' : defaultValue;
            displayValue = index < 0 ? '' : range[index].label;
          } else {
            const index = option.findIndex((item) => item.value == defaultValue);
            value = index < 0 ? '' : defaultValue;
            displayValue = index < 0 ? '' : option[index].label;
          }
          break;
        }
        case 'date': {
          value = this._coverNumber2Date(defaultDate, dateMode);
          displayValue = this._coverNumber2Date(defaultDate, dateMode, true);
          break;
        }
        case 'time': {
          value = defaultTime ? this.converTime(defaultTime) : undefined;
          displayValue = value;
          break;
        }
        case 'region': {
          value = defaultRegion;
          displayValue = defaultRegion.join(separator);
          break;
        }
        case 'mutiRegion': {
          displayValue = defaultMutiRegion || '';
          break;
        }
        default: {
          break;
        }
      }
      this.setData({
        value: value,
        displayValue: displayValue || placeholder,
        displayCls: displayValue ? '' : 'weui-input__placeholder',
      });
    },
    range: function (range) {
      const { mode, format } = this.properties;
      let selectRange = '';
      switch (mode) {
        case 'selector': {
          if (format !== 'father-son' && format !== 'related' && format !== 'x-enum') {
            selectRange = range.map((item) => item.label);
          }
          break;
        }
        default: {
          break;
        }
      }
      if (selectRange != '') {
        this.setData({
          selectRange,
        });
      }
    },
    enumName: function (enumName) {
      if (this.properties.format === 'x-enum' && enumName) {
        this._fetchEnumData();
      }
    },
    where: function (where) {
      const whereEffected = [].concat(getWhereList(where));
      this.setData({ whereEffected });
      const { format, dataSourceName, viewId } = this.properties;
      if ((format === 'father-son' || format === 'related') && dataSourceName && viewId) {
        this._fetchData(whereEffected);
      }
    },
    'records': function (records) {
      const { primaryField } = this.properties;
      if (records && records.length !== 0 && primaryField) {
        const option = records.map(item => {
          return {
            label: item[primaryField],
            value: item._id,
            name: item[primaryField]
          };
        });
        this.setData({ selectRange: option.map((item) => item.label), option });
      }
    },
  },
  methods: {
    // 获取数据列表
    _fetchData: async function (param) {
      const { dataSourceName, viewId } = this.properties;
      let pageNo = 1;
      let pageSize = 200;
      let records = [];
      let total = 99999;
      for (let index = 0; index < Math.floor(total / pageSize) + 1; index++) {
        let data = await callDataSourceApi({
          dataSourceName: dataSourceName,
          viewId: viewId,
          methodName: 'wedaGetRecords',
          params: {
            where: param,
            pageNo: pageNo,
            pageSize: pageSize
          },
        });
        pageNo = pageNo + 1;
        if (data?.records) {
          total = data?.total || 0;
          records = records.concat(data?.records);
        }

      }

      if (records) {
        this.setData({ records });
      }
    },
    //获取省
    async getProvince() {
      const { regionType, defaultMutiRegion } = this.properties;
      const changeData = await getRegionTree(defaultMutiRegion || '');
      //限制渲染时change事件触发，否则会有初始数据被覆盖问题
      if (changeData?.result.length > 0) {
        this.triggerEvent('change', changeData);
      }
      var provinceList = [...provinces];
      var provinceArr = provinces.map((item) => { return { value: item.Value, code: item.Code }; }); //保存省级名称
      this.setData({
        multiArray: JSON.parse(JSON.stringify(provinceArr)),
        provinceList,//保存省级原始数据
        provinceArr, //省级所有的名称
      });
      var defaultCode = this.data.provinceList[0].Code;  // 使用第一项当作参数获取市级数据
      this.setData({
        currnetProvinceKey: defaultCode  // 保存在当前的省级key
      });
      if (regionType != 'levelOne') {
        this.getCity(this.data.provinceList[0]);  // 获取市级数据
      }
    },
    getCity(provinceInfo) { // 获取市级数据
      const { regionType } = this.properties;
      const code = provinceInfo.Code;
      this.setData({
        currnetProvinceKey: code  // 保存当前选择的市级code
      });
      var cityArr = [];
      var cityList = [];
      cities.forEach((item) => {
        if (item.Code.substr(0, 2) == code.substr(0, 2)) {
          cityArr.push({ value: item.Value, code: item.Code });
          cityList.push(item);
        }
      });
      this.setData({
        cityList,  // 保存下市级原始数据
        cityArr  // 市级所有的名称
      });
      if (regionType == 'levelTwo') {
        const cityData = [this.data.provinceArr, cityArr];
        this.setData({
          multiArray: JSON.parse(JSON.stringify(cityData)),
        });
      }
      var defaultCode = cityList[0]?.Code;
      this.setData({
        currnetCityKey: defaultCode  // 存下当前选择的城市key
      });
      if (regionType == 'levelThree') {
        this.getRegion(cityList[0]);
      }
    },
    getRegion(cityInfo) {
      const code = cityInfo.Code;
      this.setData({
        currnetCityKey: code // 更新当前选择的市级key
      });
      var regionList = [];
      var regionArr = [];
      regions.forEach((item) => {
        if (cityInfo.Type == 1 && cityInfo.CentralCity) {
          if (item.Code.substr(0, 2) == code.substr(0, 2)) {
            regionArr.push({ value: item.Value, code: item.Code });
            regionList.push(item);
          }
        } else {
          if (item.Code.substr(0, 4) == code.substr(0, 4)) {
            regionArr.push({ value: item.Value, code: item.Code });
            regionList.push(item);
          }
        }
      });
      const threeRegion = [this.data.provinceArr, this.data.cityArr, regionArr];
      this.setData({
        multiArray: JSON.parse(JSON.stringify(threeRegion)),
        regionList,
        regionArr
      });
      var defaultCode = regionList[0]?.Code;
      this.setData({
        currnetRegionKey: defaultCode  // 存下当前选择的城市key
      });
    },
    columnchange(e) {  // 滚动选择器 触发的事件
      const { regionType } = this.properties;
      var column = e.detail.column;  // 当前改变的列
      var data = {
        multiIndex: JSON.parse(JSON.stringify(this.data.multiIndex)),
        multiArray: JSON.parse(JSON.stringify(this.data.multiArray))
      };
      data.multiIndex[column] = e.detail.value;  // 第几列改变了就是对应multiIndex的第几个，更新它
      switch (column) { // 处理不同的逻辑
        case 0:   // 第一列更改 就是省级的更改
          if (regionType != 'levelOne')
            this.getCity(this.data.provinceList[e.detail.value]);  // 获取当前key下面的市级数据
          data.multiIndex[1] = 0;  // 将市默认选择第一个
          break;
        case 1:  // 市发生变化
          this.getRegion(this.data.cityList[e.detail.value]);   // 获取区
          // }
          data.multiIndex[2] = 0;  // 区默认为第一个
          break;
      }
    },
    // 获取通用选项集列表
    _fetchEnumData: async function () {
      let data = await callWedaApi({
        action: 'DescribeGeneralOptionsDetailList',
        data: { OptNameList: [this.properties.enumName], PageIndex: 1, PageSize: 10 },
      });
      const config = destr(data?.Items?.[0]?.Config) ?? [];
      const option = config.map(item => {
        return {
          label: item.value,
          value: item.key,
          name: item.value
        };
      });
      this.setData({ selectRange: option.map((item) => item.label), option });
    },

    onChange(e) {
      const { range, mode, separator, placeholder, regionType, dateMode, format, option } = this.properties;
      let displayValue;
      switch (mode) {
        case 'selector': {
          if (format !== 'father-son' && format !== 'related' && format !== 'x-enum') {
            this.triggerEvent('change', range[e.detail.value]);
            displayValue = range[e.detail.value].label;
          } else {
            this.triggerEvent('change', option[e.detail.value]);
            displayValue = option[e.detail.value].label;
          }
          break;
        }
        case 'date':
        case 'time': {
          const value = e.detail.value;
          let day, timeSnap;
          if (mode === 'date') {
            const dateValue = this._coverDateModeValue(value, dateMode);
            day = this.converDate2Dayjs(dateValue);
            timeSnap = day.valueOf();
          } else {
            day = this.converTime2Dayjs(value);
            timeSnap = (day.hour() * 60 * 60 + day.minute() * 60) * 1000;
          }
          this.triggerEvent('change', { value: timeSnap });
          displayValue = e.detail.value;
          break;
        }
        case 'region': {
          this.triggerEvent('change', e.detail);
          displayValue = e.detail.value.join(separator);
          break;
        }
        case 'mutiRegion': {
          this.setData({
            step: 1,
            multiIndex: e.detail.value  // 更新下标字段
          });
          const value = buildDisplayValue(this.data.multiArray, this.data.multiIndex, regionType);
          displayValue = value?.value;
          this.triggerEvent('change', value);
          break;
        }
        default: {
          break;
        }
      }
      this.setData({
        displayValue: displayValue || placeholder,
        displayCls: displayValue ? '' : 'weui-input__placeholder',
      });
    },
    onCancel(e) {
      this.triggerEvent('cancel', e.detail);
    },
    converTime(time) {
      return this.converTime2Dayjs(time).format('HH:mm');
    },
    converTime2Dayjs(time) {
      const regexp = time.match(/^(\d{2}):(\d{2})$/);
      if (regexp && regexp[1] < 24 && regexp[2] < 60) {
        return dayjs().hour(regexp[1]).minute(regexp[2]);
      } else if (typeof time === 'string' && /^-?[0-9]*$/.test(time)) {
        const timeSnap = Number(time);
        let day;
        try {
          day = dayjs()
            .hour(Math.floor(timeSnap / 3600000) % 24)
            .minute(Math.floor((timeSnap % 3600000) / 60000));
        } catch (e) {
          day = dayjs(Number(time));
        }
        return day;
      } else {
        return dayjs(time);
      }
    },
    converDate2Dayjs(d) {
      if (typeof d === 'string' && /^-?[0-9]*$/.test(d)) {
        return dayjs(Number(d));
      }
      return dayjs(d);
    },
    // 将原始 number 类型值转成 YYYY-MM-DD 格式
    _coverNumber2Date(d, dateMode = 'day', isDisplay = false) {
      const day = d && this.converDate2Dayjs(d);
      if (!day) return undefined;
      let dayStr;
      if (dateMode === 'year') {
        dayStr = day.format('YYYY') + (isDisplay ? '' : '-01-01');
      } else if (dateMode === 'month') {
        dayStr = day.format('YYYY-MM') + (isDisplay ? '' : '-01');
      } else {
        dayStr = day.format('YYYY-MM-DD');
      }
      return dayStr;
    },
    // 将组件 onChange 返回的值，根据年/月/日模式，补齐返回 YYYY-MM-DD 格式
    _coverDateModeValue(d, dateMode = 'day') {
      if (dateMode === 'year' && /^\d{4}$/.test(d)) {
        return `${d}-01-01`;
      } else if (dateMode === 'month' && /^\d{4}-\d{2}$/.test(d)) {
        return `${d}-01`;
      } else {
        return d;
      }
    },

  },
});
