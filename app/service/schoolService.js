const Service = require('egg').Service;
const { Op } = require("sequelize");

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

    async list(options) {
        const { pageNum, pageSize, ...condition } = options
        let offset = pageSize * (pageNum - 1)
        return await this.ctx.model.SchoolModel.findAndCountAll({
            offset,
            limit: pageSize * 1,
            where: condition
        })
    }

    async show(condition) {
        return await this.ctx.model.SchoolModel.findOne({
            where: condition
        })
    }

}

module.exports = SchoolService;