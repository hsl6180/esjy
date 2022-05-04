// 处理url链接，加入params参数
export function urlJoinParams(url, params) {
  if (!url || !params || typeof params !== 'object') {
    return url
  }
  const separate = url.indexOf('?') === -1 ? '?' : '&'
  const tempStr = Object.keys(params)
    .map(key => {
      let value = params[key]
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      if (value != undefined) {
        return `${key}=${encodeURIComponent(value)}`
      }
      return ''
    })
    .filter(value => value)
    .join('&')
  return `${url}${separate}${tempStr}`
}
