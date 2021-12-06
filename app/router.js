'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.post('/api/v1/school/create', controller.schoolController.create)
  let baseUrl = '/api/v1'
  router.resources('schools', `${baseUrl}/school`, controller.schoolController)
};
