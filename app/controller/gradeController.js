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
            admitNumberPeople: {type: 'int', required: false, desc: 'admitNumberPeople'}
        });
        const { schoolId, majorId, minGrade, averageGrade, passGrade, recruitNumberPeople, admitNumberPeople } = ctx.request.body
        let result = await service.gradeService.create({ schoolId, majorId, minGrade, averageGrade, passGrade, recruitNumberPeople, admitNumberPeople });
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
        const id = ctx.params.id
        const { minGrade, averageGrade, passGrade, recruitNumberPeople, admitNumberPeople } = ctx.request.body
        console.log('minGrade------>', ctx.request.body)
        let result = await service.gradeService.update(id, { minGrade, averageGrade, passGrade, recruitNumberPeople, admitNumberPeople })
        console.log('result--->', result)
        ctx.updateSuccess(result)
    }

    async destroy() {
        const { ctx, service }  = this;
        ctx.validate({
            id: {type: 'int', required: true, desc: 'id'}
        });
        const id = ctx.params.id
        const result = await service.gradeService.delete(id)
        ctx.deleteSuccess(result)
    }
}

module.exports = GradeController;
