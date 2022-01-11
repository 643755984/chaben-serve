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
  SchoolMajorRelationModel.associate = function() {
      // app.model.Blog.belongsTo(app.model.Type, { foreignKey: 'type_id', targetKey: 'id'})
      app.model.SchoolMajorRelationModel.belongsTo(app.model.MajorModel, { foreignKey: 'majorId', targetKey: 'id', as: 'majorInfo' })
  }
  // app.model.SchoolMajorRelationModel.hasOne(app.model.MajorModel,{ foreignKey: 'majorId', sourceKey: 'id', as: 'majorInfo' })

  return SchoolMajorRelationModel;
};