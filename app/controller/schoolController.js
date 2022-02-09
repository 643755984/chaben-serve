'use strict';

const Controller = require('egg').Controller;

class SchoolController extends Controller {
    async create() {
        const { ctx, service }  = this;
        ctx.validate({
            schoolName: {type: 'string', required: true, desc: 'schoolName'},
            schoolLevel: {type: 'int', required: true, desc: 'schoolLevel'},
            schoolType: {type: 'int', required: true, desc: 'schoolType'},
            schoolLogo: {type: 'string', required: true, desc: 'schoolLogo'},
            schoolEmail: {type: 'string', required: false, desc: 'schoolEmail'},
            schoolAddress: {type: 'string', required: false, desc: 'schoolAddress'},
            schoolWeb: {type: 'string', required: false, desc: 'schoolWeb'},
            schoolDetailPic: {type: 'string', required: false, desc: 'schoolDetailPic'},
            schoolTel: {type: 'string', required: false, desc: 'schoolTel'}
        });
        const { schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress } = ctx.request.body
        let result = await service.schoolService.create({ schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress});
        ctx.addSuccess(result)
    }

    async update() {
        const { ctx, service }  = this;
        ctx.validate({
            schoolId: {type: 'int', required: true, desc: 'schoolId'},
            schoolName: {type: 'string', required: true, desc: 'schoolName'},
            schoolLevel: {type: 'int', required: true, desc: 'schoolLevel'},
            schoolType: {type: 'int', required: true, desc: 'schoolType'},
            schoolLogo: {type: 'string', required: true, desc: 'schoolLogo'},
            schoolEmail: {type: 'string', required: false, desc: 'schoolEmail'},
            schoolAddress: {type: 'string', required: false, desc: 'schoolAddress'},
            schoolWeb: {type: 'string', required: false, desc: 'schoolWeb'},
            schoolDetailPic: {type: 'string', required: false, desc: 'schoolDetailPic'},
            schoolTel: {type: 'string', required: false, desc: 'schoolTel'}
        })
        const { schoolId, ...schoolInfo } = ctx.request.body
        let result = await service.schoolService.update(schoolId, schoolInfo)
        ctx.updateSuccess(result)
    }

    async destroy() {
        const { ctx, service }  = this
        ctx.validate({
            schoolId: {type: 'int', required: true, desc: 'schoolId'}
        });
        
        const { schoolId } = ctx.request.body
        const result = await service.schoolService.delete(schoolId)
        this.ctx.deleteSuccess(result)
    }

    async index() {
        const { ctx, service }  = this;
        ctx.validate({
            pageNum: {type: 'int', required: true, desc: 'pageNum'},
            pageSize: {type: 'int', required: true, desc: 'pageSize'},
            schoolName: { type: 'string', required: false, desc: 'schoolName' },
            schoolLevel: { type: 'string', required: false, desc: 'schoolLevel' },
            schoolType: { type: 'string', required: false, desc: 'schoolType' },
        });
        
        let result = await service.schoolService.list(ctx.request.query)
        ctx.listSuccess(result)
    }

    async show() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'},
        });
        const { id } = ctx.request.query
        let result = await service.schoolService.show({schoolId: id})
        ctx.listSuccess(result)
    }
}

module.exports = SchoolController;
