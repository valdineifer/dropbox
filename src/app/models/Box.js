'use strict'
module.exports = (sequelize, DataTypes) => {
  const Box = sequelize.define('Box', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {})
  Box.associate = function (models) {

  }
  return Box
}
