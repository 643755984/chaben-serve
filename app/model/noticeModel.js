'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const NoticeModel = app.model.define('notice', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      schoolId: { type: INTEGER, allowNull: false },
      title: { type: STRING(100), allowNull: false },
      time: { type: STRING(20), allowNull: false },
      link: { type: STRING(100), allowNull: false },
      createdAt: DATE,
      updatedAt: DATE,
  },{
      tableName: 'notice'
  });

  return NoticeModel;
};