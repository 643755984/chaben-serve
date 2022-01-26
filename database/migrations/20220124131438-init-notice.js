'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('notice', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      school_id: { type: INTEGER, allowNull: false },
      title: { type: STRING(100), allowNull: false },
      time: { type: STRING(20), allowNull: false },
      link: { type: STRING(100), allowNull: false },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('notice');
  },
};
