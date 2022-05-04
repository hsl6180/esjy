
export function getDatapatch(base, pendingData) {
  const patch = {}
  for (const widgetId in pendingData) {
    const baseWidget = base[widgetId]
    const pendingWidget = pendingData[widgetId]
    if (!baseWidget) {
      patch[widgetId] = pendingWidget
    } else {
      patchProp(baseWidget, pendingWidget, patch, widgetId)
    }
  }
  return patch
}

function patchProp(baseWidget, pendingWidget, patch, prefixes) {
  if (Array.isArray(pendingWidget)) {
    if (pendingWidget.length < baseWidget.length) { // array element deleted
      patch[prefixes] = pendingWidget
      return
    }
    for (let i = 0; i < pendingWidget.length; i++) {
      if (!baseWidget[i]) { // new array element
        patch[prefixes + '[' + i + ']'] = pendingWidget[i]
      } else {
        patchProp(baseWidget[i], pendingWidget[i], patch, prefixes + '[' + i + ']')
      }
    }
  } else {
    if (pendingWidget._waIf === false && baseWidget._waIf === false) {
      return
    }
    const allProps = Object.keys(pendingWidget)
    // Attention: since setData will copy data deeply, if property is object, it should be treated as different
    const differentProps = allProps.filter(prop => typeof pendingWidget[prop] === 'object' || pendingWidget[prop] !== baseWidget[prop])
    if (differentProps.length === 1 || differentProps.length <= allProps.length / 3) {
      differentProps.map(patchProp => {
        patch[prefixes + '.' + patchProp] = pendingWidget[patchProp]
      })
    } else {
      patch[prefixes] = pendingWidget
    }
  }
}
