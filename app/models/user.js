const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: [1, 'Username cannot be empty.'],
        required: [true, 'Username is required.'],
        unique: true,
        index: true
    },
    email: {
        type: String,
        minlength: [1, 'Email cannot be empty.'],
        required: [true, 'Email is required.'],
        unique: true,
        index: true
    },
    password: {
        type: String,
        minlength: [5, 'Password must have a minimum length of 5 characters.'],
        required: [true, 'Password is required.']
    }
});

UserSchema.plugin(uniqueValidator);
module.exports = { model: mongoose.model('users', UserSchema), schema: UserSchema };