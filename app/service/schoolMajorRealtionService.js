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
}

module.exports = SchoolMajorRealtionService;