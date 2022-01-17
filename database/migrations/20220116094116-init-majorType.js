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
     await queryInterface.createTable('major_type', {
       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
       type_name: { type: STRING(30), allowNull: false },
       created_at: DATE,
       updated_at: DATE,
     });
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('major_type');
  }
};
