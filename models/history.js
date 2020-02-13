'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    label: DataTypes.STRING,
    confidence: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  History.associate = function(models) {
    // associations can be defined here
  };
  return History;
};