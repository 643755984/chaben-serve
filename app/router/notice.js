module.exports = app => {
  const { router, controller, config } = app
  const baseUrl = config.baseUrl

  router.get(`${baseUrl}/notice/list`, controller.noticeController.index)

  router.post(`${baseUrl}/notice/create`, controller.noticeController.create)

  router.post(`${baseUrl}/notice/delete`, controller.noticeController.destroy)

};