var express = require('express'),
app = express(),
port = 4000;
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/users', users);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 4000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});