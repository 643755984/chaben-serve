const Service = require('egg').Service;

class SchoolMajorRealtionService extends Service {
    async create(obj) {
        return await this.ctx.model.SchoolMajorRelationModel.create(obj)
    }

    async delete(id) {
        return await this.ctx.model.SchoolMajorRelationModel.destroy({
            where: {
                id
            }
        })
    }
}

module.exports = SchoolMajorRealtionService;