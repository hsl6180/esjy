import { autorun } from 'mobx'
import { touchObj, throttle } from './util'
import { resolveWidgetData } from './widget'
import { getDatapatch } from './data-patch'

export default {
  // Attention, must be called at the end of attached or page load to make sure user init take effect
  initMergeRenderer(widgets) {
    this.flushPendingData = throttle(this.flushPendingData.bind(this), 18)

    const dataFactory = {
      // p: () => pageState,
      // c: () => pageComputed,
    }
    for (const id in widgets) {
      const props = widgets[id]
      dataFactory['' + id] = () => resolveWidgetData(props)
    }
    const disposers = []
    for (const k in dataFactory) {
      const disposer = autorun(r => {
        this.requestRender({ [k]: dataFactory[k]() })
      })
      disposers.push(disposer)
    }
    this.flushPendingData() // Prepare data for first paint
    return disposers
  },

  // setData merging
  pendingData: null,
  _settingData: false,  // flag to prevent multiple setData at the same time
  flushPendingData() {
    if (!this.pendingData || this._settingData) { return }
    const patch = getDatapatch(this.data, this.pendingData)
    this.pendingData = null
    const label = `setData ${this.is} ${this.id}(${Object.keys(patch).join(',')})`

    if (Object.keys(patch).length < 1) {
      return
    }
    this._settingData = true
    const lastUpdateTime = Date.now()
    this.setData(patch, () => {
      this._settingData = false;
      this.flushPendingData()
    })
  },
  requestRender(data) {
    if(!this._pageActive) {
      // The callback of wx.chooseLocation occured when page is inactive
      console.warn(`Attention, you're updating widgets(${Object.keys(data).join(',')}) of inactive page(${this.is})`)
    }
    if (!this.pendingData) {
      this.pendingData = {}
    }
    wx.nextTick(this.flushPendingData)
    touchObj(data)  // Touch all props to monitor data deeply, FIXME
    Object.assign(this.pendingData, data)
  },
}
