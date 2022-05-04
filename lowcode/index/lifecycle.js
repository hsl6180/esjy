import { app, process } from '../../app/weapps-api';
const $app = app;
import { $page } from '../../pages/index/api.js'
export default {
  async onPageLoad(query) {
    // 设置全局底部栏
    app.dataset.state.currentFooter = $page.dataset.state.footerInfo[0]
    const [employeeList, shopInfo, topServerList, category] = await Promise.all([getEmployList(), getShop(), getTopServerList(), getAllCategory()])
    $page.dataset.state.employeeList = employeeList
    $page.dataset.state.shopInfo = shopInfo
    $page.dataset.state.topServerList = topServerList
    app.dataset.state.shopInfo = shopInfo
  },
  onPageShow() {
    //console.log('---------> LifeCycle onPageShow')
  },
  onPageReady() {
    //console.log('---------> LifeCycle onPageReady')
  },
  onPageHide() {
    //console.log('---------> LifeCycle onPageHide')
  },
  onPageUnload() {
    //console.log('---------> LifeCycle onPageUnload')
  },
}
/**
 * 获取美容专员
 */
async function getEmployList() {
  const ret = await app.dataSources['businessBeauty'].fetchEmployeeList({ where: { status: 0 }, pageSize: 4 });
  if (ret.code != 0) {
    return app.showToast({
      title: "获取美容专员失败"
    })
  }
  return ret?.data?.list.slice(0, 4) || [];
}
/**
 * 获取店铺信息
 */
async function getShop() {
  const ret = await app.dataSources['businessBeauty'].getShop();
  if (ret.code != 0) {
    return app.showToast({
      title: "获取店铺信息失败"
    })
  }
  setWorkTime(ret.data?.workTime)
  return ret?.data
}
/**
 * 格式每周工作时间
 */
function setWorkTime(workTime) {
  try {
    let timeArr = { week1: '周一', week2: '周二', week3: "周三", week4: '周四', week5: '周五', week6: '周六', week7: "周日" }
    let start = timeArr[Object.keys(workTime)[0]]
    let end = timeArr[Object.keys(workTime)[Object.keys(workTime).length - 1]]
    let startTime = workTime[Object.keys(workTime)[0]]
    let endTime = workTime[Object.keys(workTime)[Object.keys(workTime).length - 1]]
    let businessHours = `${start}至${end} ${startOrEndTimeInit(startTime.start)} - ${startOrEndTimeInit(endTime.end)}`
    $page.dataset.state.businessHours = businessHours
  } catch (err) {
    $page.dataset.state.businessHours = ''
  }

}
/**
 * 获取热门服务信息
 */
async function getTopServerList() {
  const ret = await app.dataSources['businessBeauty'].fetchTopServList({ size: 4 })
  if (ret.code != 0) {
    return app.showToast({
      title: "获取热门服务信息失败"
    })
  }
  return ret.data?.list || []
}
/**
 * 获取服务分类
 */
async function getAllCategory() {
  try {
    let ret = await app.dataSources['businessBeauty'].getAllServCategory()
    if (ret.code != 0) {
      return app.showToast({
        title: "获取服务分类失败"
      })
    }
    let currentCategory = []
    for (const arr of ret.data?.list) {
      if (arr.inHome && currentCategory.length <= 4) {
        currentCategory.push(arr)
      }
    }
    $page.dataset.state.category = currentCategory
    return ret
  } catch (err) {
    console.log(err)
  }
}

/**
 * 开始结束时间格式化
 * 返回结果/60 小于10点加0 
 */
function startOrEndTimeInit(time) {
  try {

    if (String(time).indexOf('.') > -1 && time / 60 < 10) {
      return `0${parseInt(time / 60)}:30`
    }
    if (String(time).indexOf('.') < 0 && time / 60 < 10) {
      return `0${parseInt(time / 60)}:00`
    }
    if (String(time).indexOf('.') > -1 && time / 60 > 10) {
      return `${parseInt(time / 60)}:30`
    }
    if (String(time).indexOf('.') < 0 && time / 60 > 10) {
      return `${parseInt(time / 60)}:00`
    }
  } catch (err) {
    return '-'
  }

}
