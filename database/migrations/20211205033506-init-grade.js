'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     const { INTEGER, DATE, FLOAT, STRING } = Sequelize;
     await queryInterface.createTable('grade', {
       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
       school_id: { type: INTEGER, allowNull: false },
       major_id: { type: INTEGER, allowNull: false },
       min_grade: FLOAT,
       average_grade: FLOAT,
       pass_grade: FLOAT,
       recruit_number_people: INTEGER,
       admit_number_people: INTEGER,
       year: STRING(60),
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
     await queryInterface.dropTable('grade');
  }
};
