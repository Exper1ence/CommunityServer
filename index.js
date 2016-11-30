
let http = require('express')();
let community = require('./bin/community');

http.set('port', (process.env.PORT || 5000));

http.use(community);

http.listen(http.get('port'), () => {
    console.log(`http server is running on port ${http.get('port')}.`);
});