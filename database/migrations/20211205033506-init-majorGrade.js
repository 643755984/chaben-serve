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
     await queryInterface.createTable('major_grade', {
       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
       major_id: INTEGER,
       min_grade: INTEGER,
       average_grade: INTEGER,
       pass_grade: INTEGER,
       recruit_number_people: INTEGER,
       admit_number_people: INTEGER,
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
     await queryInterface.dropTable('major_grade');
  }
};
