/**
 * Created by Exper1ence on 2016/12/2.
 */
const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.json({title: 'title', content: 'content'});
});

module.exports = router;