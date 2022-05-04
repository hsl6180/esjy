import { getCloudInstance, getTempFileURL } from '../../../utils/tcb';
import SparkMD5 from '../../../utils/spark-md5';

Component({
  options: {
    virtualHost: true,
  },

  properties: {
    maxUploadCount: {
      type: Number,
      value: 5,
    },
    title: {
      type: String,
      value: '图片上传',
    },
    tips: {
      type: String,
      value: '图片上传提示',
    },
    layout: {
      type: String,
      value: 'horizontal',
    },
    defaultValue: {
      type: null,
    },
    single: {
      type: Boolean,
      value: false,
    },
    maxSize: {
      type: Number,
      value: 10,
    },
  },
  data: {
    maxCount: 0,
    cloudFile: [],
    files: [],
    urls: [],
    singleFlag: false,
    uploadFile: async function (files) {
      try {
        // 文件上传的函数，返回一个promise
        const uploadPath = 'weda-uploader';
        const tcb = await getCloudInstance();
        const uploadPromise = files.tempFilePaths.map(
          async (tempFilePath, index) => {
            var spark = new SparkMD5.ArrayBuffer();
            spark.append(files.contents[index]);
            var md5Path = spark.end(false);
            const fileType = tempFilePath.split('.')[1];
            const cloudPath = `${uploadPath}/${md5Path}-${Date.now()}.${fileType}`;
            const uploadRes = await tcb.uploadFile({
              cloudPath,
              filePath: tempFilePath,
            });
            return { fileID: uploadRes.fileID };
          }
        );
        const uploadFileList = await Promise.all(uploadPromise);
        const cloudUrls = uploadFileList.map((file) => file.fileID);
        // 这里返回的东西会在uploadSuccess回调函数中获取到
        // https://github.com/wechat-miniprogram/weui-miniprogram/blob/a3630575910302e3b94e69fcef266d2b509de650/src/components/uploader/uploader.ts#L149
        // 写死的从返回值的 .urls 获取展示用的url来用。一定要将tempFilePaths透传下去，否则会重新加载然后出现闪白
        return { urls: files.tempFilePaths, cloudUrls };
      } catch (e) {
        wx.showToast({
          title: `${e}` || '上传失败',
          icon: 'none',
          duration: 2000,
        });
      }
    },
  },
  methods: {
    uploadError: function (e) {
      this.triggerEvent('error', e.detail);
    },
    uploadSuccess: async function (e) {
      const urls = e.detail.cloudUrls; // uploadFile 获取返回值
      // 小程序自带tempURL 不需要调用 tcb.getTempFileURL 获取
      this.triggerEvent('success', {
        value: urls,
      });
      this.setData({
        files: this.data.files.concat(e.detail.urls.map((url) => ({ url }))),
        urls: [...this.data.cloudFile, ...urls],
      });
    },
    onDelete: function (e) {
      if (this.data.urls.length == 0) {
        var storgeUrls = [];
        this.data.cloudFile.forEach((v, index) => {
          if (e.detail.index != index) {
            storgeUrls.push(v);
          }
        });
        this.setData({
          files: this.data.files.filter((v, index) => e.detail.index !== index),
          urls: storgeUrls,
        });
      } else {
        this.setData({
          files: this.data.files.filter((v, index) => e.detail.index !== index),
          urls: this.data.urls.filter((v, index) => e.detail.index !== index),
        });
      }
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
      if (value) {
        let httpFiles = [];
        for (let f of value) {
          const hf = await getTempFileURL(f);
          const httpFile = { url: hf };
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
