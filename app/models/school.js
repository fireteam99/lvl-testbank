const mongoose = require('mongoose');
//const CourseSchema = require('./course.js');
const CategorySchema = require('./category.js');

const SchoolSchema = new mongoose.model({
    name: {
        type: String
        required: [true, 'A name is required.'],
        minlength: [1, 'Name cannot be empty.']
    },
//    courses: {
//       type: [CourseSchema]
//    },
    categories: {
        [CategorySchema]
    }
    description: {
        type: String,
        minlength: [1, 'Description cannot be empty.']
    }
});

module.exports = { model: mongoose.model('courses', CourseSchema), schema: CourseSchema };
