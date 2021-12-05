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
     await queryInterface.createTable('major', {
       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
       major_name: STRING(20),
       major_type: INTEGER,
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
     await queryInterface.dropTable('major');
  }
};
