module.exports = (app, db) => {
    app.get('/buy', (req, res) => {
        res.render('pages/Buy-Exams');
    });
}
