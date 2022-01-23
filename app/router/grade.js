module.exports = app => {
  const { router, controller, config } = app
  const baseUrl = config.baseUrl

  router.get(`${baseUrl}/grade/list`, controller.gradeController.index)

  router.post(`${baseUrl}/grade/create`, controller.gradeController.create)

  router.post(`${baseUrl}/grade/edit`, controller.gradeController.update)

  router.post(`${baseUrl}/grade/delete`, controller.gradeController.destroy)

  router.get(`${baseUrl}/grade/detail`, controller.gradeController.show)
};