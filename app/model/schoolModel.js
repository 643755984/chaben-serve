'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const SchoolModel = app.model.define('schools', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      schoolName: STRING(30),
      schoolType: INTEGER,
      schoolLevel: INTEGER,
      schoolLogo: STRING(60),
      schoolEmail: STRING(20),
      schoolAddress: STRING(60),
      created_at: DATE,
      updated_at: DATE,
  });

  return SchoolModel;
};