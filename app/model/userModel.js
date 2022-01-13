'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const UserModel = app.model.define('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: STRING(30), allowNull: false },
      password: { type: STRING(30), allowNull: false },
      nickname: { type: STRING(30), allowNull: false },
      headerImg: STRING(100),
      createdAt: DATE,
      updatedAt: DATE,
  },{
      tableName: 'user'
  });

  return UserModel;
};