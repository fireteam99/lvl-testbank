module.exports = (app, db) => {
    app.get('/sell', (req, res) => {
        res.render('pages/Post-Exam-Form');
    }); 
}