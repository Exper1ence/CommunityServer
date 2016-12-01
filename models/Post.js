/**
 * Created by Exper1ence on 2016/11/30.
 */
const Model = require('./_Model');

class Post {
    constructor() {
        this.content = "content";
    }
    
    save() {
        return Post._save({content: this.content});
    }
}
Reflect.setPrototypeOf(Post, new Model('Post'));

module.exports = Post;