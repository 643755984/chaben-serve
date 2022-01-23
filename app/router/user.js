module.exports = app => {
  const { router, controller, config } = app
  const baseUrl = config.baseUrl

  router.post(`${baseUrl}/user/login`, controller.userController.login)
  
  router.post(`${baseUrl}/user/update/password`, controller.userController.updatePassword)
};