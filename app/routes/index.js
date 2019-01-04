const buy = require('./buy_routes.js');
const exam_details = require('./exam_details_routes.js');
const exams = require('./exams_routes.js');
const home = require('./home_routes.js');
const sell = require('./sell_routes.js');

module.exports = (app, db) => {
    buy(app, db);
    exam_details(app, db);
    exams(app, db);
    home(app, db);
    sell(app, db);
}