/**
 * Created by Exper1ence on 2016/12/4.
 */
module.exports = {
    getResult({value, msg = "内容不能为空"}){
        if (!value)return {done: false, msg};
    }
};