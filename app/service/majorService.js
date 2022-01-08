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

    async list(pageNum = 1, pageSize = 10, condition = {}) {
        let offset = pageSize * (pageNum - 1)
        return await this.ctx.model.MajorModel.findAndCountAll({
            offset,
            limit: pageSize * 1,
            where: condition
        })
    }
}

module.exports = MajorService;