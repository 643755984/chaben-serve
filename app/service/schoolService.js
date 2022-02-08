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

    async list(pageNum = 1, pageSize = 10, condition = {}) {
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

    async findAllForName(name, pageNum, pageSize) {
        let result = await this.ctx.model.SchoolModel.findAndCountAll({
            where: {
                schoolName: {
                    [Op.like]: `%${name}%`, 
                }
            }
        })
        if(result.count === 0) {
            let offset = pageSize * (pageNum - 1)
            result = await this.ctx.model.SchoolModel.findAndCountAll({
                offset,
                limit: pageSize * 1
            })
            result.noData = 1
        }
        
        return result
    }
}

module.exports = SchoolService;