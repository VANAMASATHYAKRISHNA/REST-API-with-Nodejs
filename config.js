require("dotenv").config();

console.log(process.env.NODE_ENV);
var env = process.env.NODE_ENV || 'development';
var config = require('./config/rest-' + env + '.json');

module.exports = config;