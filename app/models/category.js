const mongoose = require('mongoose');
const CourseSchema = require('./course.js');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String
        required: [true, 'A name is required.'],
        minlength: [1, 'Name cannot be empty.']
    },
    courses: {
        [CourseSchema]
    }
});

module.exports = { model: mongoose.model('categories', CategorySchema), schema: CategorySchema };