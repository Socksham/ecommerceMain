const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true
    },
    items: [{
        productId: String,
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.'],
            default: 1
        },
        price: Number
    }],
    register_date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User',UserSchema);
module.exports = User;
