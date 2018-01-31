


var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , Genre = require('./model/genre');

var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/books");


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/hello', (req,res) => res.send('hello world'));

app.get('/genres', (req,res) => {
  Genre.getGenres((err,genres) => {
	  if(err) {
		  throw err;
	  }
	  res.json(genres);
  });

});

app.get('/genres/:id',(req,res) => {
	
	
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
