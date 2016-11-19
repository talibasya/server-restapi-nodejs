var User = require('./user');
var Dish = require('./dish');
var mongoose = require('./mongoSetup');

module.exports = {
	User: mongoose.model('User', User),
	Dish: mongoose.model('Dish', Dish)
}