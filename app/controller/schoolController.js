'use strict';

const Controller = require('egg').Controller;

class SchoolController extends Controller {
    async create() {
        const { ctx, service }  = this;
        ctx.validate({
            schoolName: {type: 'string', required: true, desc: 'schoolName'},
            schoolLevel: {type: 'int', required: true, desc: 'schoolLevel'},
            schoolType: {type: 'int', required: true, desc: 'schoolType'},
            schoolLogo: {type: 'string', required: true, desc: 'schoolLogo'}
        });
        const { schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress } = ctx.request.body
        let result = await service.schoolService.create({ schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress});
        ctx.addSuccess(result)
    }

    async update() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'},
            schoolName: {type: 'string', required: true, desc: 'schoolName'},
            schoolLevel: {type: 'int', required: true, desc: 'schoolLevel'},
            schoolType: {type: 'int', required: true, desc: 'schoolType'},
            schoolLogo: {type: 'string', required: true, desc: 'schoolLogo'}
        });
        const id = this.ctx.params.id
        const { schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress } = ctx.request.body
        let result = await service.schoolService.update(id, { schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress })
        ctx.updateSuccess(result)
    }

    async search() {
        const { ctx, service }  = this;
        ctx.validate({
            schoolName: {type: 'string', required: true, desc: 'schoolName'}
        });
        const { schoolName } = ctx.request.query
        const schoolInfo = await service.schoolService.findName(schoolName)
        ctx.result = schoolInfo
    }

    async destroy() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'}
        });
        const id = this.ctx.params.id
        const result = await service.schoolService.delete(id)
        this.ctx.deleteSuccess(result)
    }

    async list() {
        const { ctx, service }  = this;
        ctx.validate({
            pageNum: {type: 'int', required: true, desc: 'pageNum'},
            pageSize: {type: 'int', required: true, desc: 'pageSize'}
        });
        const { pageNum, pageSize } = ctx.request.query
        let result = await service.schoolService.list(pageNum, pageSize)
        ctx.listSuccess(result)
    }
}

module.exports = SchoolController;
