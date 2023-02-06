const { Sequelize } = require('sequelize');
const Food = require('./models/food.model');
const config = require('../config/config');

const sequelize = new Sequelize(config.database_url);

const modelDefiners = [
  Food,
];

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

module.exports = sequelize;
