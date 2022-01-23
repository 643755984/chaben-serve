module.exports = app => {
  const { router, controller, config } = app
  const baseUrl = config.baseUrl

  router.get(`${baseUrl}/school/list`, controller.schoolController.index)

  router.post(`${baseUrl}/school/create`, controller.schoolController.create)

  router.post(`${baseUrl}/school/edit`, controller.schoolController.update)

  router.post(`${baseUrl}/school/delete`, controller.schoolController.destroy)

  router.get(`${baseUrl}/school/detail`, controller.schoolController.show)
};