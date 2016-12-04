/**
 * Created by Exper1ence on 2016/12/4.
 */

// user read post
module.exports = {
    checks: {
        community: "",
        _id: "帖子不存在",
    },
    handle({user, info, Models}){
        return Models.Post.findOne({_id: info._id})
            .then((doc) => {
                if (doc) {
                    return {done: true, ctt: doc}
                }
                else {
                    return {done: false, msg: this.checks._id}
                }
            });
    }
};