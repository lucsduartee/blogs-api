const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define('Category', attributes, {
    tableName: 'Categories',
    timestamps: false,
  });

  return Category;
};
