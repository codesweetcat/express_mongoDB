// var mongoose = require('mongoose');

// var genreSchema = mongoose.Schema({
// 	name:{
// 		type:String,
// 		required: true,
// 	},
// 	create_date:{
// 		type:Date,
// 		default: Date.now
// 	}
// });

// var Genre = module.exports = mongoose.model("Genre", genreSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

const Genre = mongoose.model('Genre',genreSchema);
module.exports = Genre;



//get all genres
module.exports.getGenres = function(callback, limit) {
	Genre.find(callback).limit(limit);
}

//find one by id
module.exports.findGenreByID = function(id, callback) {
	Genre.findOneById(id, callback);
}