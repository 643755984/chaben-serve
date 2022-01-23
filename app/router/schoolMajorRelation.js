module.exports = app => {
  const { router, controller, config } = app
  const baseUrl = config.baseUrl

  router.get(`${baseUrl}/schoolmajor/list`, controller.schoolMajorRelationController.index)

  router.post(`${baseUrl}/schoolmajor/create`, controller.schoolMajorRelationController.create)

  router.post(`${baseUrl}/schoolmajor/delete`, controller.schoolMajorRelationController.destroy)

};