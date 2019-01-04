const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, 'Username is required.']
    },
    text: {
        type: String,
        required: [true, 'Message body is required.']
    }
});

module.exports = CommentSchema;