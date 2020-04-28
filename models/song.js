'use strict';
module.exports = (sequelize, DataTypes) => {
  class Song extends sequelize.Sequelize.Model {}

  Song.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  Song.associate = function(models) {
    Song.belongsTo(models.User)
    // associations can be defined here
  };
  return Song;
};