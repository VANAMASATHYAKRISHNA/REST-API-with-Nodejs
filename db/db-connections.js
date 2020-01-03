const config = require('../config');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(config.db.connectionUrl, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', () => {
    console.error.bind(console, 'MongoDB connection error:')
});

db.on("connected", () => {
    console.log("Connected to database");
});
