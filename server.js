const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = require('express');

// EJS setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json);
app.use(cors());

// view routes
app.route('/', (req, res) => {
  res.render('home/index');
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log('Server running on port ' + PORT);
})
