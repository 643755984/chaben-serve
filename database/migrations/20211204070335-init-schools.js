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
    await queryInterface.createTable('schools', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      school_name: STRING(30),
      school_type: INTEGER,
      school_level: INTEGER,
      school_logo: STRING(60),
      school_email: STRING(20),
      school_address: STRING(60),
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
     await queryInterface.dropTable('schools');
  }
};
