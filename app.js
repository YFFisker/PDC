var express = require('express'),
    routes = require('./routes'),
    path = require('path');

var app = express();
app.directory = __dirname;

app.use(function staticsPlaceholder(req, res, next) {
    return next();
});

app.set('port', process.env.PORT || 9000);
app.set('views', path.join(app.directory, '/app'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());

app.use(express.static(path.join(__dirname, '/app')));

app.use(function middlewarePlaceholder(req, res, next) {
    return next();
});

app.use(app.router);
app.use(express.errorHandler());

require('./config/environments')(app);
require('./routes')(app);

module.exports = app;
