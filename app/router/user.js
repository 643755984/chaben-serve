module.exports = app => {
	const { router, controller, config, middleware } = app
	const jwtErr = middleware.jwtErr(app.config.jwt)
	const baseUrl = config.baseUrl

	router.post(`${baseUrl}/user/login`, controller.userController.login)

	router.get(`${baseUrl}/user/info`, jwtErr, controller.userController.index)
	
	router.post(`${baseUrl}/user/update/password`, controller.userController.updatePassword)
};