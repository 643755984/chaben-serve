const Service = require('egg').Service;

class MajorService extends Service {
    async create(obj) {
        return await this.ctx.model.MajorTypeModel.create(obj)
    }

    async delete(id) {
        return await this.ctx.model.MajorTypeModel.destroy({
            where: {
                id
            }
        })
    }

    async list(pageNum = 1, pageSize = 10, condition) {
        let offset = pageSize * (pageNum - 1)
        return await this.ctx.model.MajorTypeModel.findAndCountAll({
            offset,
            limit: pageSize * 1,
            where: condition
        })
    }
}

module.exports = MajorService;