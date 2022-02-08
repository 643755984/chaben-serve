const Service = require('egg').Service;

class UserService extends Service {
    async login(condition) {
        return await this.ctx.model.UserModel.findOne({
            where: condition
        })
    }

    async update(id, obj) {
        return await this.ctx.model.UserModel.update(obj, {
            where: {
                id
            }
        })
    }

    async updatePassword(id, oldPassword, newPassword) {
        let user = await this.login({id})
        if(user.getDataValue('password') == oldPassword) {
            return await this.ctx.model.UserModel.update({password: newPassword}, {
                where: {
                    id
                }
            })
        }else {
            return false
        }
    }

    async show(id) {
        return await this.ctx.model.UserModel.findOne({
            where: {
                id
            }
        })
    }

}

module.exports = UserService;