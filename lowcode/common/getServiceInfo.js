import { app, process } from '../../app/weapps-api';
const $app = app;

/*
* 函数里面访问：通过 app.common.[name].xxx 访问这里定义的方法或值
* 函数外面访问：通过 import（如在页面的 handler 引用的例子：import { xxx } from '../../common/[name]'）
*/

const getServiceInfo = async (id) => {
    try {
        let { data } = await app.dataSources['businessBeauty'].getServ({ _id: id })
        return data;
    } catch (err) {

    }
}
export default getServiceInfo