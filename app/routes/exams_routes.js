module.exports = (app, db) => {
    app.get('/exams', (req, res) => {
        res.render('pages/Exam-Page-Template');
    });
}