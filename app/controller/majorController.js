'use strict';

const Controller = require('egg').Controller;

class MajorController extends Controller {
    async create() {
        const { ctx, service }  = this;
        ctx.validate({
            majorName: {type: 'string', required: true, desc: 'schoolName'},
            majorType: {type: 'int', required: true, desc: 'schoolType'}
        });
        const { majorName, majorType } = ctx.request.body
        console.log('1--------', service.MajorService)
        let result = await service.majorService.create({ majorName, majorType });
        ctx.addSuccess(result)
    }

    async update() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'},
            majorName: {type: 'string', required: true, desc: 'schoolName'},
            majorType: {type: 'int', required: true, desc: 'schoolType'}
        });
        const id = ctx.params.id
        const { majorName, majorType } = ctx.request.body
        let result = await service.majorService.update(id, { majorName, majorType })
        ctx.updateSuccess(result)
    }

    async destroy() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'}
        });
        const id = ctx.params.id
        const result = await service.majorService.delete(id)
        ctx.deleteSuccess(result)
    }
}

module.exports = MajorController;
