/**
 * Created by Exper1ence on 2016/12/2.
 */
const router = require('express').Router();

router.get('/:id', (req, res) => {
    const {ac, cm,}=req.query;
    Community.handle({}, {
        action: ac,
        community: cm,
        _id: req.params.id,
    })
        .then((result) => {
            res.json(result);
        });
});

module.exports = router;