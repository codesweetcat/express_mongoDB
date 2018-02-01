


const express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , Genre = require('./model/genre');

const app = express();
 const Book = require('./model/book');
mongoose.connect("mongodb://127.0.0.1:27017/books")
        .then(()=>console.log("mongoose connected successfully"))
        .catch(err => console.log(err));
        
//mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds119268.mlab.com:19268/books")
const book = require('./routes/book');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


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

//all api in routes/book
app.use('/books', book);







http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
