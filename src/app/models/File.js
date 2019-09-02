module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    box_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Box',
        key: 'id',
      },
    },
  }, {});
  File.associate = function (models) {
    File.belongsTo(models.Box, {
      foreignKey: 'box_id',
      targetKey: 'id',
    });
  };
  return File;
};
