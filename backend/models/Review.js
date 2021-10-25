const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: {
        type:     String,
        requird:  true,
    },
    item: {
        type:     String,
        requird:  true,
    },
    text: {
        type: String
    },
    rating: {
        type:     Number,
        required: true,
    },
    score: {
        type: Number
    },
    date_added: {
        type:    Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
