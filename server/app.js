/**
 * Server for Care-X
 * @type {exports|*}
 */
var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , config = require('./config');
/**
 * Routing Modules
 * @type {api|exports|*}
 */
var users = require('./routes/user')
  , events = require('./routes/events')
  , discharges = require('./routes/discharges')
  , medications = require('./routes/medications')
  , index = require('./routes/index');
/**
 * Connecting to the database
 */
mongoose.connect('mongodb://localhost/' + config.dbName);
/**
 * Setting up the server and middleware
 * @type {*|exports}
 */
var app = express();
app.use(express.bodyParser());
app.set('port', config.port);
app.set('views', __dirname + '/../www');
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').__express);
app.use(express.favicon());
app.use(express.methodOverride());
app.use(express.cookieParser(config.secret));
app.use(express.cookieSession({secret: config.secret, cookie: {path: '/', httpOnly: false, maxAge: null}}));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/../www')));
/**
 * Configuring the routes as middleware
 */
app.use('/', index);
app.use('/users', users);
app.use('/events', events);
app.use('/discharges', discharges);
app.use('/medications', medications);
http.createServer(app).listen(app.get('port'), function() {
  console.log(config.service + ' listening on port ' + config.port);
});
