const { DataTypes } = require('sequelize');

const attributes = {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostCategory', attributes, {
    tableName: 'PostCategories',
    timestamps: false,
  });

  return PostCategory;
};
