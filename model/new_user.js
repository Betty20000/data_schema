const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const new_user_Schema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('new_user', new_user_Schema);