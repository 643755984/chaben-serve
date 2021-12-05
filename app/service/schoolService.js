const Service = require('egg').Service;

class SchoolService extends Service {
    async create(obj) {
        console.log('-----------1', obj)
        obj.school_name = 'fwefwe'
        const school = await this.ctx.model.SchoolModel.create(obj)
        console.log('-----------2')
        return school
    }

    async findName(name) {
        const user = await this.ctx.model.SchoolModel.findOne()
        return user;
    }
}

module.exports = SchoolService;