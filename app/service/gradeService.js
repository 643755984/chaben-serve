const Service = require('egg').Service;

class GradeService extends Service {
    async create(obj) {
        return await this.ctx.model.GradeModel.create(obj)
    }

    async update(id, obj) {
        console.log('id------->', obj)
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
}

module.exports = GradeService;