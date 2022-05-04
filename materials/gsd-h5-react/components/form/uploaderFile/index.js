import { getCloudInstance, getTempFileURL } from '../../../utils/tcb';
import SparkMD5 from '../../../utils/spark-md5';
import { transSize, uuid } from '../../../utils/platform';
Component({
  options: {
    virtualHost: true,
    multipleSlots: true,
  },
  properties: {
    label: {
      type: String,
      value: '文件上传',
    },
    //是否显示标题
    labelVisible: {
      type: Boolean,
      value: true,
    },
    //单文件上传模式
    single: {
      type: Boolean,
      value: false,
    },
    defaultValue: {
      type: null,
    },
    maxUploadCount: {
      type: Number,
      value: 9,
    },
    //单个文件最大使用限制
    maxSize: {
      type: Number,
      value: 10,
    },
    layout: {
      type: String,
      value: 'horizontal',
    },
    extClass: {
      type: String,
      value: '',
    },
    tips: {
      type: Boolean,
      value: false,
    },
    status: {
      type: String,
      valve: 'success',
    },
    downloadVisible: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    maxCount: 0,
    files: [],
    urls: [],
    cloudFile: [],
    strogeUrls: [],
    singleFlag: false
  },
  methods: {
    // 批量上传文件前置事件
    handleBefore: function (files = []) {
      if (this.data.files.length + files.length > this.data.maxCount) {
        wx.showToast({
          title: `上传文件总数不能超过${this.data.maxCount}个`,
          icon: 'none',
          duration: 2000,
        });
        return false;
      }
      if (
        this.properties.maxSize &&
        files.some((f) => f.size > this.properties.maxSize * 1024 * 1024)
      ) {
        wx.showToast({
          title: `上传文件大小不能超过${this.properties.maxSize}M`,
          icon: 'none',
          duration: 2000,
        });
        return false;
      }
      if (files.some((f) => f.size > 1024 * 1024 * 1024)) {
        wx.showToast({
          title: `上传文件大小不能超过1024M`,
          icon: 'none',
          duration: 2000,
        });
        return false;
      }
      return true;
    },
    //上传文件过程
    uploadFile: async function () {
      const wxClientApi = wx;
      const apiName = [
        'c',
        'h',
        'o',
        'o',
        's',
        'e',
        'M',
        'e',
        's',
        's',
        'a',
        'g',
        'e',
        'F',
        'i',
        'l',
        'e',
      ].join('');

      //文件上传的函数，
      wxClientApi[apiName]({
        count: this.data.maxCount,
        type: 'all',
        success: async (files) => {
          this.handleUpload(files);
        },
        fail(e) {
          this.triggerEvent('error', e.detail);
        },
      });
    },
    handleUpload: async function (files) {
      var _this = this;
      if (!this.handleBefore(files?.tempFiles)) return;
      const uploadPath = 'weda-uploader';
      const uploadPromise = files.tempFiles.map(async (tempFile) => {
        const cloudPath = `${uploadPath}/${uuid().replaceAll('-', '')}-${tempFile.name
          }`;
        tempFile.percent = '0';
        tempFile.cloudPath = null;
        tempFile.filePath = tempFile?.path || null;
        tempFile.size = transSize(tempFile?.size);
        tempFile.status = 'uploading';
        this.data.files.push(tempFile);
        this.setData({
          files: [...this.data.files],
        });
        //初始上传文件状态
        let index = this.data.files.length - 1;
        try {
          const tcb = await getCloudInstance();
          const uploadTask = await tcb.uploadFile({
            cloudPath: cloudPath,
            filePath: tempFile.path,
            success(res) {
              _this.data.files[index].cloudPath = res.fileID;
              _this.data.files[index].percent = 100;
              _this.data.files[index].status = 'success';
              const arr = [];
              arr.push(res.fileID);
              let strogeUrls = [];
              //为了避免死循环 在组件接到默认值后用cloudFile做暂存，造成urls跟cloudFile不同步，根据暂存状态来处理更新urls
              if (_this.data.cloudFile.length > 0) {
                strogeUrls = [..._this.data.cloudFile, ...arr];
              } else {
                strogeUrls = [..._this.data.urls, ...arr];
              }
              //同步urls cloudFile
              _this.setData({
                files: [..._this.data.files],
                urls: [...strogeUrls],
                cloudFile: [...strogeUrls],
              });
              if (_this.properties.single) {
                _this.triggerEvent('success', {
                  value: _this.data.urls[0],
                });
              } else {
                _this.triggerEvent('success', {
                  value: _this.data.urls,
                });
              }
            },
            fail() {
              this.data.files[index].status = 'fail';
            },
          });
          uploadTask.onProgressUpdate((res) => {
            this.data.files[index].percent = String(res.progress);
            res.progress == 100
              ? (this.data.files[index].status = 'success')
              : (this.data.files[index].status = 'uploading');
            this.data.files[index].uploaded = transSize(res.totalBytesSent);
            this.setData({
              files: this.data.files,
              //cloudFile:this.data.cloudFile.concat(this.data.files)
            });
          });
          return { fileID: uploadTask.fileID };
        } catch (e) {
          this.triggerEvent('error', e.detail);
          this.data.files[index].status = 'fail';
        }
      });
      this.setData({
        files: this.data.files,
        url: this.data.files,
      });
      return { urls: files.tempFiles };
    },

    onDelete: function (e) {
      if (this.data.urls.length == 0) {
        var storgeUrls = [];
        this.data.cloudFile.forEach((v, index) => {
          if (e.target.dataset.item.cloudPath != v) {
            storgeUrls.push(v);
          }
        });
        this.setData({
          files: this.data.files.filter(
            (v, index) => e.target.dataset.item.cloudPath !== v.cloudPath
          ),
          urls: storgeUrls,
        });
      } else {
        const filelist = this.data.files.filter(
          (item) => e.target.dataset.item?.path != item?.path
        );
        this.setData({
          files: filelist,
          urls: this.data.urls.filter(
            (v, index) => e.target.dataset.item?.cloudPath != v
          ),
        });
      }
    },
    reload: function (e) {
      this.handleUpload(e.target.dataset.item);
    },
    downloadFile: async function (e) {
      const fileSrc = await getTempFileURL(e.target.dataset.item?.cloudPath);
      wx.downloadFile({
        url: fileSrc,
        success(res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          if (res.statusCode === 200) {
            wx.showToast({
              title: `下载成功`,
              icon: 'none',
              duration: 2000,
            });
          }
        },
      });
    },
  },
  observers: {
    defaultValue: async function (value) {
      //当单图片上传且默认值为空数组时，初次渲染更新value，以避免空串提交类型不匹配问题
      if (Array.isArray(value) && !this.data.singleFlag) {
        this.setData({
          urls: value
        });
        this.data.singleFlag = true;
      }
      let httpFiles = [];
      if (value && JSON.stringify(value) != '[]') {
        for (let f of value) {
          const hf = await getTempFileURL(f);
          const uuidReg = /[0-9a-f]{8}([0-9a-f]{4}){3}[0-9a-f]{12}-/;
          const lastIndex = String(hf).lastIndexOf('/');
          const name = String(hf).slice(lastIndex + 1);
          const label = name.replace(uuidReg, '');
          const httpFile = {
            name: label,
            cloudPath: f,
            filePath: hf,
            path: hf,
            status: 'success',
          };
          httpFiles.push(httpFile);
        }
        this.setData({
          files: httpFiles,
          cloudFile:
            JSON.stringify(value) != JSON.stringify(this.data.cloudFile)
              ? value
              : [],
        });
      } else {
        this.setData({
          files: [],
          cloudFile: [],
        });
      }
    },
    'maxUploadCount, single': function (maxUploadCount, single) {
      const maxCount = single ? 1 : maxUploadCount;
      this.setData({
        maxCount,
      });
    },
    urls: function (urls) {
      let value = urls;
      if (this.properties.single) {
        value = urls[0] ?? '';
      }
      this.triggerEvent('change', { value });
    },
  },
});
