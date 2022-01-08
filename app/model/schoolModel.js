'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const SchoolModel = app.model.define('schools', {
      schoolId: { type: INTEGER, primaryKey: true, autoIncrement: true },
      schoolName: { type: STRING(30), allowNull: false },
      schoolType: { type: INTEGER, allowNull: false },
      schoolLevel: { type: INTEGER, allowNull: false },
      schoolLogo: STRING(60),
      schoolEmail: STRING(20),
      schoolAddress: STRING(60),
      createdAt: DATE,
      updatedAt: DATE,
  });

  // this.hasOne(app.model.)

  return SchoolModel;
};