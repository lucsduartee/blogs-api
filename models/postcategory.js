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
  const PostsCategory = sequelize.define('PostsCategory', attributes, {
    tableName: 'PostsCategories',
    timestamps: false,
  });

  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(
      models.BlogPost,
      { as: 'blogposts', foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategory },
    );
    models.BlogPost.belongsToMany(
      models.Category,
      { as: 'categories', foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategory },
    );
  };

  return PostsCategory;
};
