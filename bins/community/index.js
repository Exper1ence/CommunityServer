let app = require('express')();

global.Community = {table: require('./table'), handle: require('./core')};
app.use(require('body-parser').json());
app.use(require('./router'));

module.exports = app;