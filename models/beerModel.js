var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var beerSchema = new Schema({
	'name' : String,
	'percentage' : Number
});

module.exports = mongoose.model('beer', beerSchema);
