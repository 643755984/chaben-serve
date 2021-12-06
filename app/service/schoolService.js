const Service = require('egg').Service;

class SchoolService extends Service {
    async create(obj) {
        const school = await this.ctx.model.SchoolModel.create(obj)
        return school
    }

    async findName(name) {
        const user = await this.ctx.model.SchoolModel.findOne()
        return user;
    }
}

module.exports = SchoolService;