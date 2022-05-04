export async function getCloudInstance() {
  return await getApp().app.cloud.getCloudInstance();
}

/**
 * 获取单个临时链接
 * 单个cos文件，返回字符串
 * 多个cos文件，返回 {fileID: src} 这样的对象
 */
export async function getTempFileURL(data) {
  if (getApp().app.cloud.getTempFileURL) {
    return await getApp().app.cloud.getTempFileURL(data);
  }
}

/**
 * 云API：获取用户自定义导航内容
 *  param
 *  WeAppId: string,
 *  EnvId: string,
 *  PublishType?: string,
 */
export async function getAppCustomNav() {
  try {
    const PublishType = getApp().app.cloud?.IS_WEDA_IDE ? 'preview' : '';
    const WeAppId = getApp().app?.id;
    const res = await callWedaApi({
      action: 'DescribeAppCustomNav',
      serviceType: 'lowcode',
      data: {
        WeAppId,
        PublishType,
      },
    });
    return res;
  } catch (error) {
    console.error('错误', error);
    return {};
  }
}

/**
 * 调用微搭后端API服务
 */
export async function callWedaApi(param) {
  if (getApp().app.cloud.callWedaApi) {
    return await getApp().app.cloud.callWedaApi(param);
  }
}

/**
 * 云函数获取数据
 */
export async function callDataSource(param) {
  if (getApp().app.cloud.callDataSource) {
    return await getApp().app.cloud.callDataSource(param);
  }
}

/**
 * 云函数获取数据
 */
export async function callDataSourceApi(param) {
  const { params, dataSourceName, methodName } = param;
  try {
    const res = await getApp()?.app?.cloud?.callDataSource?.({
      params,
      dataSourceName,
      methodName,
    });
    return res;
  } catch (error) {
    console.error('错误', error);
    return {};
  }
}
