/**
 * Created by Exper1ence on 2016/12/5.
 */
//user delete post
module.exports = {
    checks: {
        community: "",
        _id: "帖子已被删除",
    },
    handle({info, models}){
        return models.post.remove({_id: info._id})
            .then((count) => {
                if (count > 0) {
                    return {done: true, msg: "帖子删除成功"};
                }
                else {
                    return {done: false, msg: this.checks._id}
                }
            });
    }
};