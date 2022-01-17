const Service = require('egg').Service;

class SchoolMajorRealtionService extends Service {
    async create(schoolId, majorIds) {
        let arr = []
        for(let i=0;i<majorIds.length;i++) {
            arr.push({schoolId, majorId: majorIds[i]})
        }
       
        // return await this.ctx.model.SchoolMajorRelationModel.create(obj)
        return await this.ctx.model.SchoolMajorRelationModel.bulkCreate(arr);
    }

    async delete(id) {
        return await this.ctx.model.SchoolMajorRelationModel.destroy({
            where: {
                id
            }
        })
    }

    async list(pageNum = 1, pageSize = 10, condition = {}) {
        let offset = pageSize * (pageNum - 1)
        return await this.ctx.model.SchoolMajorRelationModel.findAndCountAll({
            offset,
            limit: pageSize * 1,
            where: condition,
            include: [
                {
                    model: this.app.model.MajorModel,
                    as: 'majorInfo',
                    include: [
                        {
                            model: this.app.model.MajorTypeModel,
                            as: 'majorTypeInfo'
                        }
                    ]
                }
            ]
        })
    }
}

module.exports = SchoolMajorRealtionService;