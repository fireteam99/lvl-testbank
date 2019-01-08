module.exports = (app, db) => {
   app.get('/exam-details', (req, res) => {
       res.render('pages/Exam-Details');
   }); 
}
