const mongoose = require('mongoose');
const ExamSchema = require('./ExamSchema').schema;

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Course name is required.'],
        minlength: [1, 'Name cannot be empty.']
    },
    code: {
        type: String,
        minlength: [1, 'Code cannot be empty.']
    },
    exams: {
        type: [ExamSchema];
    }
});

module.exports = { model: mongoose.model('Exams', ExamSchema), schema: ExamSchema };