/**
 * Created by greyman on 2016/11/30.
 */
let app = require('express')();

app.get('/', (req, res, next) => {
    res.send('Welcome to Community beta v0.0.1');
});

module.exports = app;