var express = require('express');

var app = express();
var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);
//app.set('view options', { layout: 'layout/main' });
var path = require('path');
app.set('views', path.join(__dirname, 'resources/views'));
var web = require('./routes/web'); //all website routes will define in web.js
var api = require('./routes/api'); //all api routes will define in api.js
app.use('/', web);
app.use('/api/', api);//define prefix (api) for api routes
var http = require('http');
var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(8000);