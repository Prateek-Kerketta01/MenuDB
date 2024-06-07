const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    taste: {type: String, enum: ['Sweet', 'Spicy', 'sour']},
    is_drink: {type: Boolean},
    ingredient: {type: [String], default: []},
    num_sales: {type: Number, default: 0}
})

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu; //Menu the collection name