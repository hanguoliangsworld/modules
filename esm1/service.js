const express = require('express');
const path = require('path')
var app = express();

app.use(express.static('./html'));

var server = app.listen(8082, function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
  })
  