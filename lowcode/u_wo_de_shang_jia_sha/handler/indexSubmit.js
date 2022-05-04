import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/u_wo_de_shang_jia_sha/api.js'

/*
* 可通过 $page.handler.xxx 访问这里定义的方法
* 注意：该方法仅在所属的页面有效
* 如果需要 async-await，请修改成 export default async function() {}
*/
// var checkSubmit = true;

const submit = async function({event, data}) {
    const { storeImages, storeAddress, businessHours, servicePhone } = event.detail;
    let cityArr = [];
    storeAddress && storeAddress.map(ele => {
        cityArr.push(ele);
    });
    console.log(">>event.detail", event.detail);
    
    const result = {
        ...event.detail,
        storeImages:storeImages[0] || "",
        storeAddress: cityArr,
        businessHours: businessHours || 0,
        servicePhone: Number(servicePhone)
    }
    console.log(">>result", result);
    // if(checkSubmit) {
    //     checkSubmit = false;
        try {
            let res = await app.dataSources['weda_form_vc48wno'].wedaCreate(result);
            if(res.code === 0) {
                app.showToast({
                    title: '提交成功',
                    icon: 'success',
                    duration: 2000 // 2秒
                })
            }else{
                app.showToast({
                    title: '提交失败',
                    icon: 'error',
                    duration: 2000 // 2秒
                })
            }
            console.log("res", res);
        } catch (err) {
            console.log("err", err);
        }
        // setTimeout(() => {
        //     checkSubmit = true;
        // }, 3000);
    // }
}

function throttle(func, delay) {
  let timer = null
  return function (...args) {
    const context = this
    if (timer) {
      return
    }
    timer = setTimeout(function () {
      func.apply(context, args)
      clearTimeout(timer)
      timer = null
    }, delay || 1000)
  }
}

export default throttle(submit, 3000);