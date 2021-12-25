'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     const { INTEGER, DATE } = Sequelize;
     await queryInterface.createTable('major_grade_relation', {
       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
       school_id: { type: INTEGER, allowNull: false },
       major_grade_id: { type: INTEGER, allowNull: false },
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
     await queryInterface.dropTable('major_grade_relation');
  }
};
