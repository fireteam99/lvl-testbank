const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, 'Username is required.']
    },
    body: {
        type: String,
        required: [true, 'Comment body is required.']
    }
});

module.exports = CommentSchema;