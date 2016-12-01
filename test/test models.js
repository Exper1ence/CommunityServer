/**
 * Created by Exper1ence on 2016/11/30.
 */
let models = require('./models');
let Post = models.Post;

let post = new Post();
post.save()
    .then(() => {
        console.log("save")
    })
    .then(() => {
        console.log("save")
        return post.save();//唯一性
    })
    .then(() => {
        console.log("save")
        return post.save();//唯一性
    })
    .then(() => {
        console.log("save");
        return Post.find({content: /cont/}, 2)
    })
    .then((posts) => {
        console.log(posts);
        return Post.update({content: /cont/}, {b: 3}, 2)
    })
    .then(() => {
        return Post.find({content: /cont/})
    })
    .then((posts) => {
        console.log(posts);
        return Post.remove({content: /cont/}, 2)
    })
    .then(() => {
        return Post.find({content: /cont/})
    })
    .then((posts) => {
        console.log(posts);
        Post.remove({});
    })
    .catch((e)=>{
        console.log(e)
    });