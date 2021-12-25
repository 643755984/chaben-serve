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
      school_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      school_name: { type: STRING(30), allowNull: false },
      school_type: { type: INTEGER, allowNull: false },
      school_level: { type: INTEGER, allowNull: false },
      school_logo: STRING(60),
      school_email: STRING(20),
      school_address: STRING(60),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // Sequelize
  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('schools');
  }
};
