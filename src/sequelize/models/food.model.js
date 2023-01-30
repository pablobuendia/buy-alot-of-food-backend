const { DataTypes } = require('sequelize');

const Food = (sequelize) => sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: DataTypes.STRING,
});

module.exports = Food;
