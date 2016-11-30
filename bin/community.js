
let app = require('express')();

app.get('/', (req, res, next) => {
    res.send('Welcome to Community beta v0.1.0_161130_beta_b');
});

module.exports = app;