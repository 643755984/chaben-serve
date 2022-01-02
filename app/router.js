'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.post('/api/v1/school/create', controller.schoolController.create)
  let baseUrl = '/api/v1'
  router.resources('schools', `${baseUrl}/school`, controller.schoolController)
  router.get(`${baseUrl}/school/search`, controller.schoolController.search)
  router.get(`${baseUrl}/school/list`, controller.schoolController.list)

  router.resources('major', `${baseUrl}/major`, controller.majorController)

  router.resources('addMajor', `${baseUrl}/school/major`, controller.schoolMajorRelationController)

  router.resources('addGrade', `${baseUrl}/school/grade`, controller.gradeController)

  router.post(`${baseUrl}/common/upload`, controller.commonController.upload)
};
