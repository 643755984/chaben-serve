'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const SchoolMajorRelationModel = app.model.define('school_major_relation', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      schoolId: { type: INTEGER, allowNull: false },
      majorId: { type: INTEGER, allowNull: false },
      createdAt: DATE,
      updatedAt: DATE,
  },{
      tableName: 'school_major_relation'
  });

  return SchoolMajorRelationModel;
};