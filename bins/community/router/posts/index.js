/**
 * Created by Exper1ence on 2016/12/2.
 */
const router = require('express').Router();
const routers = require('dynamic-object-generator')(__dirname,true);

for (let subRouter of routers) {
    router.use('/posts',subRouter);
}

module.exports = router;