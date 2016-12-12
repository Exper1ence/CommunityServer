let app = require('express')();

global.Community = {table: require('./table'), handle: require('./core')(require('./models'))};
app.use(require('body-parser').json());
app.use(require('./router'));

module.exports = app;