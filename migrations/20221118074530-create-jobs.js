'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_id: {
        type: Sequelize.INTEGER
      },
      salary: {
        type: Sequelize.STRING
      },
      image_path: {
        type: Sequelize.TEXT
      },
      title: {
        type: Sequelize.STRING
      },
      title_desc: {
        type: Sequelize.TEXT
      },
      content_title: {
        type: Sequelize.STRING
      },
      content_desc: {
        type: Sequelize.TEXT
      },
      is_available: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jobs');
  }
};