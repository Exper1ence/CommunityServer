require('bluebird');
const http = require('express')();
const path = require('path');
const apps = require('dynamic-object-generator')(path.resolve(__dirname, 'bin'));
http.set('port', (process.env.PORT || 5001));

for (let app in apps) {
    if (apps.hasOwnProperty(app)) {
        http.use(apps[app]);
    }
}

http.listen(http.get('port'), () => {
    console.log(`http server is running on port ${http.get('port')}.`);
});