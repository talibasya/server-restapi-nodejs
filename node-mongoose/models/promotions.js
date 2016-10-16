// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


/*{
    "name": "Weekend Grand Buffet",
    "image": "images/buffet.png",
    "label": "New",
    "price": "19.99",
    "description": "Featuring . . ."
}*/

// create a schema
var leaderShipSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    label: {
        type: String,
        required: true,
        default: ''
    },
    price: {
        type: Currency
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var LeaderShips = mongoose.model('Promotion', leaderShipSchema);

// make this available to our Node applications
module.exports = LeaderShips;