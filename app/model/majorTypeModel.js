'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const MajorTypeModel = app.model.define('major', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      typeName: { type: STRING(30), allowNull: false },
      createdAt: DATE,
      updatedAt: DATE,
  },{
      tableName: 'major_type'
  });

  return MajorTypeModel;
};