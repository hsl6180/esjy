import debounce from '../../../../../utils/debounce';
import dr_square_point from '../../../../../utils/dr_square_point';
let QQMapWX = require('../../../../../utils/qqmap-wx-jssdk1.2/qqmap-wx-jssdk');
let qqmapsdk;

// components/mapChoose/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    location: {
      type: Object,
      value: {
        latitude: 39.984104,
        longitude: 116.307503,
        poiname: '',
      },
    },
    APIKEY: {
      type: String,
      value: '',
    },
    range: {
      type: Number,
      value: 1000,
    },
  },

  lifetimes: {
    attached: function () {
      let location = this.properties.location;
      let marker = {
        id: 'id-marker',
        latitude: location.latitude,
        longitude: location.longitude,
        width: 25,
        height: 35,
      };
      this.setData({
        markers: [marker],
        originMarker: {
          ...marker,
          id: 'origin',
        },
        choosedLocation: location,
      });
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
        key: this.properties.APIKEY,
      });
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchValue: '',
    isSearch: false,
    exploreList: [],
    searchList: [],
    choosedLocation: {
      latitude: null,
      longitude: null,
    },
    originMarker: {},
    markers: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    regionchange(event) {
      let {
        type,
        detail: { centerLocation },
      } = event;
      if (type === 'begin') return;
      let marker = {
        id: 'id-marker',
        latitude: centerLocation.latitude,
        longitude: centerLocation.longitude,
        width: 25,
        height: 35,
      };
      this.setData({
        markers: [marker, this.data.originMarker],
      });
      this.searchLocation('路', 20, centerLocation, this, 'exploreList');
    },
    comfirm(event) {
      this.triggerEvent('setIsSelectMapVisible');
      if (
        this.data.choosedLocation.latitude &&
        event.currentTarget.dataset.value
      ) {
        this.triggerEvent('changeLocation', this.data.choosedLocation);
      }
    },
    changeInput(e) {
      this.setData({
        searchValue: e.detail.value,
      });
      if (!e.detail.value) {
        setTimeout(() => {
          this.setData({
            searchList: [],
          });
        }, 1000);
        return;
      }
      this.searchLocation(
        e.detail.value,
        10,
        this.data.markers[0],
        this,
        'searchList'
      );
    },
    focusInput() {
      this.setData({
        isSearch: true,
      });
    },
    cancleSearch() {
      this.setData({
        isSearch: false,
        searchValue: '',
      });
    },
    searchLocation: debounce((value, page_size, location, _this, type) => {
      let range = _this.properties.range / 1000;
      let { leftBottom, rightTop } = dr_square_point(
        location.longitude,
        location.latitude,
        range
      );
      qqmapsdk.search({
        keyword: value,
        page_size,
        rectangle: `${leftBottom[0]},${leftBottom[1]},${rightTop[0]},${rightTop[1]}`,
        success: (res) => {
          _this.setData({
            [type]: res.data,
          });
        },
        fail: function (err) {
          console.log('err search', err);
          if (
            err.message ===
            'getLocation:fail 频繁调用会增加电量损耗，可考虑使用 wx.onLocationChange 监听地理位置变化'
          ) {
            wx.showToast({
              title:
                '获取周边信息接口并发限制 高频调用请前往腾讯地图后台申请配额',
              icon: 'none',
              duration: 2000,
            });
          }
        },
      });
    }, 500),
    chooseSite(event) {
      let { title, location, id } = event.currentTarget.dataset.location;
      let type = event.currentTarget.dataset.type;
      location = {
        latitude: location.lat,
        longitude: location.lng,
        poiname: title,
        id,
      };
      if (type === 'search') {
        let marker = {
          id: 'id-marker',
          latitude: location.latitude,
          longitude: location.longitude,
          width: 25,
          height: 35,
        };
        let originMarker = this.data.originMarker;
        this.setData({
          isSearch: false,
          searchList: [],
          searchValue: '',
          choosedLocation: location,
          markers: [marker, originMarker],
        });
        this.searchLocation('路', 20, location, this, 'exploreList');
      } else {
        this.setData({
          choosedLocation: location,
        });
      }
    },
  },
});
