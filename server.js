const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbConfig = require('./config/db.js');
const mongoose = require('mongoose');

const app = express();

// EJS setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(cors());

// deprecation stuff
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// connect to db
mongoose.connect(dbConfig.url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    // view routes

    // testing db connection
    app.get("/test/:id", (req, res) => {
        res.send(req.params);
    });

    const testSchema = new mongoose.Schema({
        name: String
    });

    const Test = mongoose.model('Test', testSchema);
    const test = new Test({ name: "tester321" });
    console.log(test.name);

    test.save(function (err, test) {
        if (err) return console.error(err);
    });
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> {
        console.log('Server running on port ' + PORT);
    });

});
