module.exports = app => {
  const { router, controller, config } = app
  const baseUrl = config.baseUrl

  router.post(`${baseUrl}/common/upload`, controller.commonController.upload)

  router.post(`${baseUrl}/common/upload/base64`, controller.commonController.uploadOnBase64)
};