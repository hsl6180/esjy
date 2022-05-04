import { app, process } from '../../../app/weapps-api';
const $app = app;
import { $page } from '../../../pages/u_wo_de_shang_pin/api.js'

/*
* 可通过 $page.handler.xxx 访问这里定义的方法
* 注意：该方法仅在所属的页面有效
* 如果需要 async-await，请修改成 export default async function() {}
*/

export default async function({event}) {
    const meta = $page.dataset.state.wedaListMeta
    console.log(meta);

    // $page.setState('dataset.state.$status.wedaListMeta.status', 'loading');
    app.utils.set($page, 'dataset.state.$status.wedaListMeta.status', 'loading')
    // $page.dataset.state.$status.wedaListMeta.status = 'loading'
    try {
        const data = await app.cloud.callDataSource({
            dataSourceName: 'weda_list_uun20hm',
            methodName: 'wedaGetRecords',
            params: {
                pageNo: meta.pageNo + 1,
                pageSize: meta.pageSize
            }
        })
        console.log(data)
        $page.setState({
            "wedaListMeta": {
                pageNo: data.pageNo,
                pageSize: data.pageSize,
                total: data.total,
                records: meta.records.concat(data.records)
            }
        })
        app.utils.set($page, 'dataset.state.$status.wedaListMeta.status', 'success')
        // $page.dataset.state.$status.wedaListMeta.status = 'success'
    }catch(e){
        console.log(e)
        app.utils.set($page, 'dataset.state.$status.wedaListMeta.status', 'fail')
        // $page.dataset.state.$status.wedaListMeta.status = 'fail'
    }
}