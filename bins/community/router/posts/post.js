/**
 * Created by Exper1ence on 2016/12/4.
 */
const router = require('express').Router();
const table = Community.table;

router.post('/', (req, res, next) => {
    const {ac, cm, ct}=req.body;
    Community.handle({}, {
        action: ac,
        community: cm,
        content: ct,
    })
        .then((result) => {
            res.json(result);
        });
    
});

module.exports = router;