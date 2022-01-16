'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     const { INTEGER, DATE, STRING } = Sequelize;
     await queryInterface.createTable('user', {
       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
       username: { type: STRING(30), allowNull: false },
       password: { type: STRING(30), allowNull: false },
       nickname: { type: STRING(30), allowNull: false },
       header_img: STRING(100),
       created_at: DATE,
       updated_at: DATE,
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('user');
  }
};
