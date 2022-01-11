'use strict';

const Controller = require('egg').Controller;

class SchoolMajorRelationController extends Controller {
    async create() {
        const { ctx, service }  = this;
        ctx.validate({
            schoolId: {type: 'int', required: true, desc: 'schoolId'},
            majorIds: {type: 'array',required: true, desc: 'majorIds'}
        });
        
        const { schoolId, majorIds } = ctx.request.body
        let result = await service.schoolMajorRealtionService.create(schoolId, majorIds);
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

    async index() {
        const { ctx, service }  = this;
        ctx.validate({
            pageNum: {type: 'int', required: true, desc: 'pageNum'},
            pageSize: {type: 'int', required: true, desc: 'pageSize'},
            schoolId: {type: 'int', required: true, desc: 'schoolId'}
        });
        const { pageNum, pageSize, ...condition } = ctx.request.query
        let result = await service.schoolMajorRealtionService.list(pageNum, pageSize, condition)
        ctx.listSuccess(result)
    }
}

module.exports = SchoolMajorRelationController;
