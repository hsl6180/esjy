import { REL_DICT } from '../../utils/constant';
import { isNil } from '../../utils/lodash';

const ORDERTYPE = ['asc', 'desc'];
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
const DEFAULT_DATA = {
  pageNo: 1,
  total: 0,
  records: [],
  pageStr: '0/0',
  isVisiableSign: false,
  isFirstScreen: true,
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
    datasource: {
      type: Object,
      value: {},
    },
    orderBy: {
      type: String,
    },
    orderType: {
      type: String,
    },
    where: {
      type: Array,
      value: [],
    },
    pageSize: {
      type: Number,
      value: 5,
    },
    template: {
      type: String,
      value: 'simpleList',
    },
    pagination: {
      type: String,
      value: 'loadMoreButton',
    },
    beforeDataChange: {
      type: Function,
      value: (v) => v,
    },
  },
  data: { ...DEFAULT_DATA, isReLoad: false, loading: false },
  methods: {
    /**
     * 列表容器拉取数据，放在 setData 的回调函数中执行
     */
    _fetchData: async function () {
      const { app } = getApp();
      const callDataSource = app?.cloud?.callDataSource;
      const { pageNo, loading, isReLoad } = this.data;
      const { datasource, orderBy, orderType, where, pageSize } =
        this.properties;
      if (loading && !isReLoad) return;
      if (!callDataSource) {
        console.warn(`当前环境缺少方法 app.cloud.callDataSource`);
        return;
      }
      this.setData({ loading: true });
      const { name: dataSourceName, extra } = datasource || {};
      const methodName =
        typeof extra?.methodName === 'string'
          ? extra?.methodName
          : 'wedaGetRecords';
      const tcbParams = {};

      // tcb分页参数
      if (!isNil(pageNo) && !isNil(pageSize)) {
        tcbParams['pageNo'] = pageNo;
        tcbParams['pageSize'] = pageSize;
      }
      // tcb排序参数
      if (orderBy && ORDERTYPE.includes(orderType)) {
        tcbParams['orderBy'] = orderBy;
        tcbParams['orderType'] = orderType;
      }
      // tcb过滤参数
      const whereEffected = [].concat(getWhereList(where));
      whereEffected.length > 0 && (tcbParams['where'] = whereEffected);
      // tcb结果和事件
      try {
        const data = await callDataSource({
          dataSourceName,
          methodName,
          params: tcbParams,
        });
        let records = data?.records || [];
        let total = data?.total || 0;
        if (
          ['loadMoreButton', 'bottomLoad'].includes(
            this.properties.pagination
          ) &&
          !isReLoad
        ) {
          records = [...this.data.records, ...records]; // TODO 可能存在单次 setData 数据量过大引起小程序性能问题
        }
        this.setData(
          {
            total,
            records,
            loading: false,
            isReLoad: false,
            pageStr: `${total > 0 ? pageNo : 0}/${
              Math.ceil(total / pageSize) || 0
            }`,
          },
          () => {
            this._handleEvents(data);
            setTimeout(() => this._firstScreenLoadMore(), 150);
          }
        );
      } catch (e) {
        this.setData({ loading: false });
      }
    },
    /**
     * 下一页
     */
    handleNext: function () {
      if (
        this.data.loading ||
        !(this.properties.pageSize * this.data.pageNo < this.data.total)
      ) {
        return;
      }
      this.setData({ pageNo: this.data.pageNo + 1 }, () => this._fetchData());
    },
    /**
     * 上一页
     */
    handlePre: function () {
      if (this.data.loading || !(this.properties.pageNo > 1)) {
        return;
      }
      this.setData({ pageNo: this.data.pageNo - 1 }, () => this._fetchData());
    },
    /**
     * 向外部传递事件
     */
    _handleEvents: function (data) {
      const records = this.data.records || [];
      const total = this.data.total || records?.length || 0;
      const beforeDataChange = this.properties.beforeDataChange || ((v) => v);
      this.triggerEvent('onDataChange', {
        data: beforeDataChange(records),
      });
      if (JSON.stringify(data) === '{}') {
        this.triggerEvent('queryFail', {
          datasource: this.properties.datasource,
          data: null,
        });
      } else {
        if (total === 0) {
          this.triggerEvent('queryEmpty', {
            datasource: this.properties.datasource,
            data: beforeDataChange([]),
          });
        }
        this.triggerEvent('querySuccess', {
          datasource: this.properties.datasource,
          data: beforeDataChange(records),
        });
      }
    },
    /**
     * 首屏持续触底加载特殊处理
     */
    _firstScreenLoadMore: function () {
      if (this.properties.pagination === 'bottomLoad') {
        if (this.data.isFirstScreen) {
          this.setData({ isFirstScreen: false });
          this.contentObserver?.disconnect();
          this._observerContent();
        }
      }
    },
    /**
     * 开始监听slot
     */
    _observerContent: function () {
      this.contentObserver = this.createIntersectionObserver();
      this.contentObserver
        .relativeToViewport()
        .observe('#weda-list-view_content', (res) => {
          this.setData({
            isFirstScreen:
              res?.boundingClientRect?.bottom <= res?.relativeRect?.bottom,
          });
        });
    },
    /**
     * 开始监听sign
     */
    _observerSign: function () {
      this.signObserver = this.createIntersectionObserver();
      this.signObserver
        .relativeToViewport()
        .observe('#weda-list-view_sign', (res) => {
          this.setData({ isVisiableSign: res?.intersectionRatio > 0 });
        });
    },
  },
  observers: {
    'datasource,orderBy,orderType,where,pageSize,pagination': function () {
      clearTimeout(this._timer);
      this._timer = setTimeout(
        () =>
          this.setData({ ...DEFAULT_DATA, isReLoad: true }, () =>
            this._fetchData()
          ),
        200
      );
    },
    isVisiableSign: function (dIsVisiableSign) {
      if (dIsVisiableSign && this.properties.pagination === 'bottomLoad') {
        this.handleNext();
      }
    },
    isFirstScreen: function (dIsFirstScreen) {
      if (dIsFirstScreen && this.properties.pagination === 'bottomLoad') {
        this.handleNext();
      }
    },
  },
  lifetimes: {
    attached: function () {
      clearTimeout(this._timer);
      this._fetchData();
      this._observerSign();
    },
    detached: function () {
      this.contentObserver?.disconnect();
      this.signObserver?.disconnect();
    },
  },
});
