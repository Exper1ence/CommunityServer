/**
 * Created by greyman on 2016/11/30.
 */
let app = require('express')();

app.get('/', (req, res, next) => {
    res.send('welcome to Community beta');
});

module.exports = app;