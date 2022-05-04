Component({
  /**
   * 组件的属性列表
   */
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
    source: {
      type: String,
      value: '',
    },
    showLngLat: {
      type: Boolean,
      value: true,
    },
    showMap: {
      type: Boolean,
      value: true,
    },
    defauleShowLocation: {
      type: Boolean,
      value: true,
    },
    drag: {
      type: Boolean,
      value: true,
    },
    zoom: {
      type: Boolean,
      value: true,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    requiredFlag: {
      type: Boolean,
      value: true,
    },
    value: {
      type: Object,
      value: {
        latitude: 39.98410411,
        longitude: 116.307503,
        poiname: '',
      },
    },
    locationType: {
      type: Number,
      value: 1,
    },
    customLocation: {
      type: Object,
      value: {
        latitude: 22.540366,
        longitude: 113.934559,
        poiname: '深圳市南山区深南大道10000号腾讯大厦',
      },
    },
  },

  lifetimes: {
    attached: function () {
      const wxClientApi = wx;
      const apiName = [
        'g',
        'e',
        't',
        'L',
        'o',
        'c',
        'a',
        't',
        'i',
        'o',
        'n',
      ].join('');

      // 在组件实例进入页面节点树时执行
      const getCurrentLocation = (locationType) => {
        wxClientApi[apiName]({
          isHighAccuracy: true, //高精度定位
          success: (res) => {
            let { latitude, longitude } = res;
            let location = {
              latitude,
              longitude,
              poiname: '',
            };
            let marker = {
              id: 887,
              latitude,
              longitude,
              width: 25,
              height: 35,
            };
            this.setData({
              location,
              markers: [marker],
              currentLocations: location,
              currentPosition: {
                status: true,
                message: '',
              },
            });
            this.setLocation(location);
            if (locationType === 1) {
              this.triggerEvent('change', {
                value: null,
              });
            } else {
              this.setData({
                isAddrShow: true,
              });
              this.changeValueFormat(location);
            }
          },
          fail: ({ errMsg }) => {
            console.log('getlocation', errMsg);
            let currentPositionMsg = errMsg;
            this.triggerEvent('change', {
              value: null,
            });
            if (
              errMsg ===
              'getLocation:fail 频繁调用会增加电量损耗，可考虑使用 wx.onLocationChange 监听地理位置变化'
            ) {
              currentPositionMsg = '频繁获取当前定位会增加电量损耗请稍后再选择';
              setTimeout(() => {
                getCurrentLocation(locationType);
              }, 3000);
            }
            this.setData({
              currentPosition: {
                status: false,
                message: currentPositionMsg,
              },
              currentLocations: {},
            });
          },
        });
      };
      const { locationType, customLocation } = this.properties;
      if (locationType === 1 || locationType === 2) {
        // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
        wx.getSetting({
          success: (res) => {
            if (!res.authSetting['scope.userLocation']) {
              // 没有授权
              wx.authorize({
                scope: 'scope.userLocation',
                success: () => {
                  // 用户已经同意小程序使用定位功能，后续调用 wx.getLocation 接口不会弹窗询问
                  getCurrentLocation(locationType);
                },
                fail: (err) => {
                  console.log('authorize fail', err);
                  this.setData({
                    currentPosition: {
                      status: false,
                      message: err.errMsg,
                    },
                    currentLocations: {},
                  });
                  this.triggerEvent('change', {
                    value: null,
                  });
                  wx.showToast({
                    icon: 'none',
                    title: err.errMsg,
                  });
                },
              });
            } else {
              // 已经授权
              getCurrentLocation(locationType);
            }
          },
          fail: (err) => {
            console.log('getSetting fail', err);
            wx.showToast({
              icon: 'none',
              title: 'getSetting fail',
            });
          },
        });
      } else if (locationType === 3) {
        this.setData({
          currentPosition: {
            status: true,
            message: '',
          },
        });
        if (this.checkCustomLocation(customLocation)) {
          wx.showToast({
            icon: 'none',
            title: '位置输入格式错误 请检查',
          });
          return;
        } else {
          this.setLocation(customLocation);
          this.changeValueFormat(customLocation);
        }
      }
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    location: {
      latitude: 39.98410411,
      longitude: 116.307503,
      poiname: '',
    },
    markers: [],
    isAddrShow: false,
    currentPosition: {
      status: false,
      message: '获取当前定位中',
    },
    currentLocations: {},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooseSite() {
      let { latitude, longitude } = this.data.location;
      let currentPosition = this.data.currentPosition;
      if (this.properties.disabled || !currentPosition.status) {
        return wx.showToast({
          icon: 'none',
          title: currentPosition.status ? '已禁用' : currentPosition.message,
          duration: 2000,
        });
      }
      const wxClientApi = wx;
      const apiName = [
        'c',
        'h',
        'o',
        'o',
        's',
        'e',
        'L',
        'o',
        'c',
        'a',
        't',
        'i',
        'o',
        'n',
      ].join('');
      wxClientApi[apiName]({
        latitude,
        longitude,
        success: (res) => {
          if (res.name) {
            this.changeLocation({
              ...res,
              poiname: res.name,
            });
          }
        },
        fail: (err) => {
          console.log('chooseLocation err', err);
        },
      });
    },
    changeLocation(location) {
      let isAddrShow = this.data.isAddrShow;
      if (!isAddrShow) {
        this.setData({
          isAddrShow: true,
        });
      }
      let marker = {
        id: 887,
        latitude: location.latitude,
        longitude: location.longitude,
        width: 25,
        height: 35,
      };
      this.setData({
        location,
        markers: [marker],
      });
      this.changeValueFormat(location);
    },
    checkCustomLocation(params) {
      let { latitude, longitude } = params;
      let message = '';
      if (Object.prototype.toString.call(params) !== '[object Object]') {
        return (message = '位置输入格式错误 请检查');
      } else if (!latitude || !Number(latitude)) {
        return (message = '位置输入格式错误 请检查');
      } else if (!longitude || !Number(longitude)) {
        return (message = '位置输入格式错误 请检查');
      } else if (!params) {
        return (message = '位置输入格式错误 请检查');
      }
    },
    setLocation(value) {
      const { latitude, longitude } = value;
      let marker = {
        id: 887,
        latitude,
        longitude,
        width: 25,
        height: 35,
      };
      this.setData({
        location: value,
        markers: [marker],
      });
      this.changeValueFormat(value);
    },
    changeValueFormat(value) {
      const { latitude, longitude, poiname } = value;
      let location = {
        address: poiname,
        geopoint: {
          coordinates: [longitude, latitude],
          type: 'Point',
        },
      };
      this.triggerEvent('change', {
        value: location,
      });
    },
  },
  observers: {
    value: function (value) {
      const currentLocations = this.data.currentLocations;
      if (value || !currentLocations.latitude) return;
      const locationType = this.properties.locationType;
      const { latitude, longitude } = currentLocations;
      let marker = {
        id: 887,
        latitude,
        longitude,
        width: 25,
        height: 35,
      };
      this.setData({
        location: currentLocations,
        markers: [marker],
        isAddrShow: false,
      });
      if (locationType === 1) {
        this.triggerEvent('change', {
          value: null,
        });
      } else if (locationType === 2) {
        this.changeValueFormat(currentLocations);
        this.setData({
          isAddrShow: true,
        });
      }
    },
  },
});
