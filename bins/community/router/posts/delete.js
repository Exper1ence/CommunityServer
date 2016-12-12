/**
 * Created by Exper1ence on 2016/12/5.
 */
const router = require('express').Router();

router.delete('/:id', (req, res) => {
    const {ac, cm}=req.query;
    Community.handle({
        action: ac,
        community: cm,
        _id: req.params.id,
    })
        .then((result) => {
            res.json(result);
        });
});

module.exports = router;