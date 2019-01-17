const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const CommentSchema = require('./comment.js').schema; 

const ExamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Exam name is required.'],
        minlength: [1, 'Name cannot be empty.']
    },
    professor: {
        type: String
        minlength: [1, 'Professor name cannot be empty.']
    },
    buyerCount: {
        type: Number,
        min: [0, 'Buyer count must be positive.']
    },
    source: {
        type: String,
        required: [true, 'Source is required.'],
        minlength: [1, 'Source cannot be empty.']
        // add validation
    },
    seller: {
        type: String,
        minlength: [1, 'Seller cannot be empty.'],
        required: [true, 'Source is required.']
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
    likes: {
        type: Number,
        min: [0, 'Number of likes must be positive.']
    },
    dislikes: {
        type: Number,
        min: [0, 'Number of dislikes must be positive.']
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

module.exports = { model: mongoose.model("exams", ExamSchema), schema: ExamSchema });

