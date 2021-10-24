const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const ReviewSchema = new Schema({

});

module.exports = Review = mongoose.model('user', ReviewSchema);
