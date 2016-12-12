/**
 * Created by Exper1ence on 2016/12/4.
 */

//user write post
module.exports = {
    checks: {
        community: "",
        content: "",
    },
    handle({info, models}){
        return models.post.insert({content: info.content})
            .then(() => {
                return {done: true, msg: "帖子发表成功"}
            });
    }
};