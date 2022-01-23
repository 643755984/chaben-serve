module.exports = app => {
  const { router, controller, config } = app
  const baseUrl = config.baseUrl

  router.get(`${baseUrl}/major/list`, controller.majorController.index)

  router.post(`${baseUrl}/major/create`, controller.majorController.create)

  // router.post(`${baseUrl}/major/edit`, controller.majorController.update)

  router.post(`${baseUrl}/major/delete`, controller.majorController.destroy)

  // router.get(`${baseUrl}/major/detail`, controller.majorController.show)
};