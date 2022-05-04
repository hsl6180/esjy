import process from '../../../../common/process'
import app from '../../../../common/weapp-sdk'
const $app = app;
export default {
  onAttached() {
    //console.log('---------> LifeCycle onAttached')
    addCssByLink('https://tdesign.gtimg.com/icon/0.0.3/fonts/index.css')
  },
  onDetached() {
    //console.log('---------> LifeCycle onDetached')
  },
}


function addCssByLink(url) {
  try {
    if(!window||!window.document) return
    let doc = window.document;
    let link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);

    let heads = doc.getElementsByTagName("head");
    if (heads.length)
      heads[0].appendChild(link);
    else
      doc.documentElement.appendChild(link);

  } catch (error) {
    console.log('addCssByLink err', err)
  }
} ;