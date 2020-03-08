var StaticServer = require('static-server');
var server = new StaticServer({
rootPath: './dist/',             
port: 2500
});

server.start(function () {
    console.log('Server run at server 2500  ', server.port);
  });