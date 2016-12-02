let app = require('express')();

app.use(require('./router'));

app.get('/', (req, res, next) => {
    res.send('Welcome to Community beta v0.1.0');
});

module.exports = app;