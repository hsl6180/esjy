import { urlJoinParams } from './url'
import { promisifyAll } from 'miniprogram-api-promise'

function createNavigatorFn(fnName) {
  return function ({ pageId, packageName, params, mode='', events, success, fail, complete }) {
    let url;
    if(mode == 'plugin'){
      url = `plugin://${packageName}/${pageId}`
    } else if(mode ==='web'){
      console.warn(`${fnName} url can only be used in h5 build`);
      return;
    } else {
      pageId = pageId ? pageId.replace(/^(\.)?\//,'') : pageId;
      url = packageName
      ? `/${packageName}/pages/${pageId}/index`
        : `/pages/${pageId}/index`
    }
    wx[fnName]({
      url: urlJoinParams(url, params),
      events,
      success,
      fail,
      complete
    })
  }
}

const navigateTo = createNavigatorFn('navigateTo')
const reLaunch = createNavigatorFn('reLaunch')
const redirectTo = createNavigatorFn('redirectTo')

export const wxp = {}
promisifyAll(wx, wxp)

export default {
  ...wxp,
  navigateTo,
  reLaunch,
  redirectTo,
  auth: undefined
}
