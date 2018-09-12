const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// EJS setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(cors());

// view routes
app.get('/', (req, res) => {
  res.render('pages/Home');
});

app.get('/buy', (req, res) => {
  res.render('pages/Buy-Exams');
});

app.get('/sell', (req, res) => {
  res.render('pages/Post-Exam-Form');
});

app.get('/exam-details', (req, res) => {
  res.render('pages/Exam-Details');
});

app.get('/exams', (req, res) => {
  res.render('pages/Exam-Page-Template');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log('Server running on port ' + PORT);
})
