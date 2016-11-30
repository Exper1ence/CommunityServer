
let app = require('express')();

app.get('/', (req, res, next) => {
    res.send('Welcome to Community beta v0.1.0-beta-b-00001');
});

module.exports = app;