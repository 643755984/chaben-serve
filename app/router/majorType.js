module.exports = app => {
  const { router, controller, config } = app
  const baseUrl = config.baseUrl

  router.get(`${baseUrl}/majortype/list`, controller.majorTypeController.index)

  router.post(`${baseUrl}/majortype/create`, controller.majorTypeController.create)

  router.post(`${baseUrl}/majortype/delete`, controller.majorTypeController.destroy)
};