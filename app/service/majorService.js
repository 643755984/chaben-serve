const Service = require('egg').Service;

class MajorService extends Service {
    async create(obj) {
        return await this.ctx.model.MajorModel.create(obj)
    }

    async update(id, obj) {
        return await this.ctx.model.MajorModel.update(obj, {
            where: {
                id
            }
        })
    }

    async delete(id) {
        return await this.ctx.model.MajorModel.destroy({
            where: {
                id
            }
        })
    }
}

module.exports = MajorService;