/**
 * Created by Exper1ence on 2016/12/2.
 */
const router = require('express').Router();
const routers = require('dynamic-object-generator')(__dirname,true);

router.get('/', (req, res, next) => {
    res.send('Welcome to Community beta v0.1.0');
});

for (let subRouter of routers) {
    router.use(subRouter);
}

module.exports = router;