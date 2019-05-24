const knex = require('knex');
const config = require('../knexfile.js');

// DB_ENV located in package.json. Helps to dynamically load the different knex configurations for testing
const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);
