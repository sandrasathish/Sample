var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('C:\\Users\\Sathish\\test')).listen(1437, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');