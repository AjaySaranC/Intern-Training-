const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Restaurant = sequelize.define('Restaurant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'restaurants',
  timestamps: false
});


module.exports = Restaurant;
