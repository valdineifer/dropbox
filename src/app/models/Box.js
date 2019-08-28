'use strict'
module.exports = (sequelize, DataTypes) => {
  const Box = sequelize.define('Box', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    modelName: 'Box',
    sequelize
  })
  Box.associate = function (models) {
    Box.hasMany(models.File, {
      foreignKey: 'box_id',
      sourceKey: 'id'
    })
  }
  return Box
}
