const { Sequelize } = require('sequelize');
const Food = require('./models/food.model');

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres');

const modelDefiners = [
  Food,
];

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

module.exports = sequelize;
