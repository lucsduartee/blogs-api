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

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(
      models.BlogPost,
      { as: 'blogposts', foreignKey: 'categoryId', otherKey: 'postId', through: PostCategory },
    );
    models.BlogPost.belongsToMany(
      models.Category,
      { as: 'categories', foreignKey: 'postId', otherKey: 'categoryId', through: PostCategory },
    );
  };

  return PostCategory;
};
