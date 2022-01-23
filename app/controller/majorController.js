'use strict';

const Controller = require('egg').Controller;

class MajorController extends Controller {
    async create() {
        const { ctx, service }  = this;
        ctx.validate({
            majorName: {type: 'string', required: true, desc: 'majorName'},
            majorType: {type: 'int', required: true, desc: 'majorType'}
        });
        const { majorName, majorType } = ctx.request.body
        let result = await service.majorService.create({ majorName, majorType });
        ctx.addSuccess(result)
    }

    // async update() {
    //     const { ctx, service }  = this;
    //     ctx.validate({
    //         id: {type: 'int', required: true, desc: 'id'},
    //         majorName: {type: 'string', required: true, desc: 'majorName'},
    //         majorType: {type: 'int', required: true, desc: 'majorType'}
    //     });
    //     // const id = ctx.params.id
    //     const { id, majorName, majorType } = ctx.request.body
    //     let result = await service.majorService.update(id, { majorName, majorType })
    //     ctx.updateSuccess(result)
    // }

    async destroy() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'}
        });
        const { id } = ctx.request.body
        const result = await service.majorService.delete(id)
        ctx.deleteSuccess(result)
    }

    async index() {
        const { ctx, service }  = this;
        ctx.validate({
            pageNum: {type: 'int', required: true, desc: 'pageNum'},
            pageSize: {type: 'int', required: true, desc: 'pageSize'},
            majorName: { type: 'string', required: false, desc: 'majorName' },
            majorType: { type: 'int', required: false, desc: 'majorType' }
        });
        const { pageNum, pageSize, ...majorName } = ctx.request.query
        let result = await service.majorService.list(pageNum, pageSize, majorName)
        ctx.listSuccess(result)
    }
}

module.exports = MajorController;
