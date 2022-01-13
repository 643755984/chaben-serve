const Service = require('egg').Service;

class GradeService extends Service {
    async create(obj) {
        return await this.ctx.model.GradeModel.create(obj)
    }

    async update(id, obj) {
        return await this.ctx.model.GradeModel.update(obj, {
            where: {
                id
            }
        })
    }

    async delete(id) {
        return await this.ctx.model.GradeModel.destroy({
            where: {
                id
            }
        })
    }

    async list(condition = {}) {
        return await this.ctx.model.GradeModel.findAndCountAll({
            where: condition
        })
    }

    async show(id) {
        return await this.ctx.model.GradeModel.findOne({
            where: {
                id
            }
        })
    }
}

module.exports = GradeService;