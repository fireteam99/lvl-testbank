const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const CommentSchema = require('./comment.js')

const ExamSchema = new mongoose.Schema({
    buyerCount: {
        type: Number,
        min: [0, 'Buyer count must be positive.']
    },
    seller: {
        type: String,
        required: [true, 'Seller is required.'],
        index: true
    },
    date: {
        type: Date,
        required: [true, 'Date posted is required.']
    },
    netRating: {
        type: Number
    },
    likes: {
        type: Number
    },
    dislikes: {
        type: Number
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be positive']
    },
    comments: {
        type: [CommentSchema]
    }
});