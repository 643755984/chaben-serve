'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        const { ctx, service, app }  = this
        ctx.validate({
            username: {type: 'string', required: true, desc: 'username'},
            password: {type: 'string', required: true, desc: 'password'}
        });
        const { username, password } = ctx.request.body
        const result = await service.userService.login({ username, password })

        const token = setToken(app, result)

        if(result){
            ctx.body = {
                code: 200,
                msg: '登录成功',
                // data: result,
                token: token
            }
        }else {
            ctx.body = {
                code: 201,
                msg: '登录失败'
            }
        }
    }

    async update() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'},
            nickname: {type: 'string', required: false, desc: 'nickname'},
            headerImg: {type: 'string', required: false, desc: 'headerImg'}
        });
        const id = ctx.params.id
        const { nickname, headerImg } = ctx.request.body

        let result = await service.userService.update(id, { nickname, headerImg })

        ctx.updateSuccess(result)
    }

    async updatePassword() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'},
            oldPassword: {type: 'string', required: false, desc: 'oldPassword'},
            newPassword: {type: 'string', required: false, desc: 'newPassword'}
        });
        const { id, oldPassword, newPassword } = ctx.request.body

        let result = await service.userService.updatePassword(id, oldPassword, newPassword )
        if(result === false) {
            ctx.body = {
                code: '201',
                msg: '密码错误'
            }
        }else {
            ctx.updateSuccess(result)
        }
    }

    async index() {
        const { ctx, app, service }  = this
        const token = ctx.request.header.authorization
        const decode = ctx.app.jwt.verify(token, app.config.jwt.secret)

        const result = await service.userService.show(decode.id)
        ctx.listSuccess(result)
    }
}

function setToken(app, userInfo) {
    const token = app.jwt.sign({
        id: userInfo.id,
        username: userInfo.username,
        loginTime: new Date()
    }, app.config.jwt.secret)

    return token
}

module.exports = UserController;
