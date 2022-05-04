import { app, process } from '../../app/weapps-api';
const $app = app;
export async function isUserExist() {
  const ret = await app.dataSources['businessBeauty'].checkUserExist()
  if (ret.code != 0) {
    return app.showToast({
      title: '用户验证失败'
    });
  }
  app.dataset.state.exist['exist'] = ret.data?.exist
  return ret.data?.exist

}
//如果用户存在，更新用户信息
async function getUser() {
  const ret = await app.dataSources['businessBeauty'].getUser()
  if (ret.code != 0) {
    return app.showToast({
      title: '获取用户信息失败'
    });
  }

  return app.dataset.state.userInfo = ret?.data || {}
}
//用户不存在，微信申请授权
export async function wxProfile() {
  wx.getUserProfile({
    desc: '用于继续访问该内容', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: async (res) => {
      const updateInfo = {
        "gender": res.userInfo.gender || 0,
        "avater": res.userInfo.avatarUrl || null,
        "nickname": res.userInfo.nickName || null,
        "name": res.userInfo.nickName || null,
      }
      const updateRet = await app.dataSources['businessBeauty'].updateUser(updateInfo);
      if (updateRet.code != 0) {
        return app.showToast({
          title: '用户信息更新失败'
        });
      }
      app.dataset.state.exist = true
      app.dataset.state.userInfo = updateRet?.data || {}
      return true
    }
  })
}