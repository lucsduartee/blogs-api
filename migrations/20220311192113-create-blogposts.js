'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'published',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated',
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
