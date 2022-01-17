'use strict';

const Controller = require('egg').Controller;

class MajorTypeController extends Controller {
    async create() {
        const { ctx, service }  = this;
        ctx.validate({
            typeName: {type: 'string', required: true, desc: 'typeName'}
        });
        const { typeName } = ctx.request.body
        let result = await service.majorTypeService.create({ typeName });
        ctx.addSuccess(result)
    }

    async destroy() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'}
        });
        const id = ctx.params.id
        const result = await service.majorTypeService.delete(id)
        ctx.deleteSuccess(result)
    }

    async index() {
        const { ctx, service }  = this;
        ctx.validate({
            pageNum: {type: 'int', required: true, desc: 'pageNum'},
            pageSize: {type: 'int', required: true, desc: 'pageSize'},
            typeName: {type: 'string', required: false, desc: 'typeName'},
        });
        const { pageNum, pageSize, ...condition } = ctx.request.query
        let result = await service.majorTypeService.list(pageNum, pageSize, condition)
        ctx.listSuccess(result)
    }
}

module.exports = MajorTypeController;
