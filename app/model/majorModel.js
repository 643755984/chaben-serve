'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const MajorModel = app.model.define('major', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      majorName: { type: STRING(30), allowNull: false },
      majorType: { type: INTEGER, allowNull: false },
      createdAt: DATE,
      updatedAt: DATE,
  },{
      tableName: 'major'
  });

  // MajorModel.associate = function() {
  //   // app.model.Blog.belongsTo(app.model.Type, { foreignKey: 'type_id', targetKey: 'id'})
  //   app.model.MajorModel.belongsTo(app.model.SchoolMajorRelationModel, { foreignKey: 'id', targetKey: 'majorId', as: 'majorInfo' })
  // }

  return MajorModel;
};