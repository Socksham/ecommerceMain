const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type:     String,
        required: true
    },
    name: {
        type:     String,
        required: true
    },
    description: {
        type:     String,
        required: true
    },
    price: {
        type:     Number,
        required: true
    },
    rating: {
        type:     Number,
        required: true
    },
    image: {
        type: String,
    },
    date_added: {
        type:    Date,
        default: Date.now
    },
});

const Item = mongoose.model('item',ItemSchema);
module.exports = Item;