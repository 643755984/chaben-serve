const Service = require('egg').Service;

class NoticeService extends Service {
    async create(obj) {
        return await this.ctx.model.NoticeModel.create(obj)
    }

    async delete(id) {
        return await this.ctx.model.NoticeModel.destroy({
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

module.exports = NoticeService;