'use strict';

const Controller = require('egg').Controller;

class SchoolMajorRelationController extends Controller {
    async create() {
        const { ctx, service }  = this;
        ctx.validate({
            schoolId: {type: 'int', required: true, desc: 'schoolId'},
            majorId: {type: 'int', required: true, desc: 'majorId'}
        });
        const { schoolId, majorId } = ctx.request.body
        let result = await service.schoolMajorRealtionService.create({ schoolId, majorId });
        ctx.addSuccess(result)
    }

    async destroy() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'}
        });
        const id = ctx.params.id
        const result = await service.schoolMajorRealtionService.delete(id)
        ctx.deleteSuccess(result)
    }
}

module.exports = SchoolMajorRelationController;
