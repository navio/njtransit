    var jsonServer = require('json-server');
    var fs = require('fs');
    var path = require('path');
    var db = {}; var jsonfolder = './db';
    var files = fs.readdirSync(jsonfolder);
    files.forEach(function (file) {
        if (path.extname(jsonfolder + file) === '.json') {
            db[path.basename(file, '.json')] = require(jsonfolder +'/'+file);
        }
    });
    var server = jsonServer.create();
    server.use(jsonServer.defaults());
    var router = jsonServer.router(db);
    server.use(router);
    server.listen(9000);
