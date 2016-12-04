/**
 * Created by Exper1ence on 2016/12/5.
 */
const router = require('express').Router();

router.get('/', (req, res) => {
    const {ac, cm, l, o,}=req.query;
    Community.handle({}, {
        action: ac,
        community: cm,
        offset: o,
        length: l,
    })
        .then((result) => {
            res.json(result);
        });
});

module.exports = router;