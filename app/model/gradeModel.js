'use strict';

module.exports = app => {
  const { INTEGER, DATE, FLOAT, STRING } = app.Sequelize;

  const GradeModel = app.model.define('grade', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      schoolId: { type: INTEGER, allowNull: false },
      majorId: { type: INTEGER, allowNull: false },
      minGrade: FLOAT,
      averageGrade: FLOAT,
      passGrade: FLOAT,
      recruitNumberPeople: INTEGER,
      admitNumberPeople: INTEGER,
      year: { type: STRING, allowNull: false },
      createdAt: DATE,
      updatedAt: DATE,
  },{
      tableName: 'grade'
  });

  return GradeModel;
};