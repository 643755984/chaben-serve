'use strict';

const Controller = require('egg').Controller;

class MajorController extends Controller {
    async create() {
        const { ctx, service }  = this;
        ctx.validate({
            schoolId: {type: 'int', required: true, desc: 'schoolId'},
            link: {type: 'string', required: true, desc: 'link'},
            time: {type: 'string', required: true, desc: 'time'},
            title: { type: 'string',required: true },
        });
        const { schoolId, link, time, title } = ctx.request.body
        let result = await service.noticeService.create({ schoolId, link, time, title });
        ctx.addSuccess(result)
    }

    async destroy() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'}
        });
        const { id } = ctx.request.body
        const result = await service.noticeService.delete(id)
        ctx.deleteSuccess(result)
    }

    async index() {
        const { ctx, service }  = this;
        ctx.validate({
            pageNum: {type: 'int', required: true, desc: 'pageNum'},
            pageSize: {type: 'int', required: true, desc: 'pageSize'}
        });
        const { pageNum, pageSize, ...condition } = ctx.request.query
        let result = await service.noticeService.list(pageNum, pageSize, condition)
        ctx.listSuccess(result)
    }
}

module.exports = MajorController;
