/**
 * Created by Exper1ence on 2016/12/5.
 */
// user read posts
module.exports = {
    checks: {
        community: "",
        offset: "",
        length: "",
    },
    handle({info, models}){
        return models.post.find({})
            .then((docs) => {
                docs = docs.slice(info.offset, info.offset + info.length);
                if (docs.length > 0) {
                    return {done: true, ctt: docs}
                }
                else {
                    return {done: false, msg: "无更多内容"}
                }
            });
    }
};