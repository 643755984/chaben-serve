const Service = require('egg').Service;

class SchoolService extends Service {
    async create(obj) {
        const school = await this.ctx.model.SchoolModel.create(obj)
        return school
    }

    async update(schoolId, obj) {
        return await this.ctx.model.SchoolModel.update(obj, {
            where: {
                schoolId
            }
        })
    }

    async delete(schoolId) {
        return await this.ctx.model.SchoolModel.destroy({
            where: {
                schoolId
            }
        })
    }

    async findName(schoolName) {
        const user = await this.ctx.model.SchoolModel.findOne({schoolName})
        return user;
    }

    async list(pageNum = 1, pageSize = 10) {
        let offset = pageSize * (pageNum - 1)
        return await this.ctx.model.SchoolModel.findAndCountAll({
            offset,
            limit: pageSize * 1
        })
    }
}

module.exports = SchoolService;