const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
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
        data:        Buffer,
        contentType: String,
    },
    date_added: {
        type:    Date,
        default: Date.now
    },
});

const Item = mongoose.model('item',ItemSchema);
module.exports = Item;