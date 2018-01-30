var mongoose = require('mongoose')

var genreSchema = mongoose.schema({
		name:{
			type:String,
			required: true
		},
		create_date:{
			type: Date,
			default: Date.now
		}
});
//gerre object is accessible from anywhere alse
var Genre = module.exports = mongoose.model('Genre',genreSchema);

//get Genres
module.exports.getGenres = function(callback,limit) {
	Genre.find(callback).limit(limit);
}