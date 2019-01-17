const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, 'Username is required.']
        minlength: [1, 'Username cannot be empty.']
    },
    body: {
        type: String,
        required: [true, 'Comment body is required.'],
        minlength: [1, 'Comment body cannot be empty.']
    }
});

module.exports = { model: mongoose.model('comments', CommentSchema), schema: CommentSchema };