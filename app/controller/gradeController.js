'use strict';

const Controller = require('egg').Controller;

class GradeController extends Controller {
    async create() {
        const { ctx, service }  = this;
        ctx.validate({
            schoolId: {type: 'int', required: true, desc: 'schoolId'},
            majorId: {type: 'int', required: true, desc: 'majorId'},
            minGrade: {type: 'float', required: false, desc: 'minGrade'},
            averageGrade: {type: 'float', required: false, desc: 'averageGrade'},
            passGrade: {type: 'float', required: false, desc: 'passGrade'},
            recruitNumberPeople: {type: 'int', required: false, desc: 'recruitNumberPeople'},
            admitNumberPeople: {type: 'int', required: false, desc: 'admitNumberPeople'},
            year: {type: 'string', required: true, desc: 'year'}
        });
        const { schoolId, majorId, minGrade, averageGrade, passGrade, recruitNumberPeople, admitNumberPeople, year } = ctx.request.body
        let result = await service.gradeService.create({ schoolId, majorId, minGrade, averageGrade, passGrade, recruitNumberPeople, admitNumberPeople, year });
        ctx.addSuccess(result)
    }

    async update() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'},
            minGrade: {type: 'float', required: false, desc: 'minGrade'},
            averageGrade: {type: 'float', required: false, desc: 'averageGrade'},
            passGrade: {type: 'float', required: false, desc: 'passGrade'},
            recruitNumberPeople: {type: 'int', required: false, desc: 'recruitNumberPeople'},
            admitNumberPeople: {type: 'int', required: false, desc: 'admitNumberPeople'}
        });
        const { id, minGrade, averageGrade, passGrade, recruitNumberPeople, admitNumberPeople } = ctx.request.body

        let result = await service.gradeService.update(id, { minGrade, averageGrade, passGrade, recruitNumberPeople, admitNumberPeople })

        ctx.updateSuccess(result)
    }

    async destroy() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'}
        });
        const { id } = ctx.request.body
        const result = await service.gradeService.delete(id)
        ctx.deleteSuccess(result)
    }

    async index() {
        const { ctx, service }  = this;
        ctx.validate({
            schoolId: { type: 'int', required: true, desc: 'schoolId' },
            majorId: { type: 'int', required: true, desc: 'majorId' }
        });
        let result = await service.gradeService.list(ctx.request.query)
        ctx.listSuccess(result)
    }

    async show() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'},
        });
        const { id } = ctx.request.query
        let result = await service.gradeService.show(id)
        ctx.listSuccess(result)
    }
}

module.exports = GradeController;
