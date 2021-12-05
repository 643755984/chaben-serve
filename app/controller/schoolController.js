'use strict';

const Controller = require('egg').Controller;

class SchoolController extends Controller {
    async create() {
        // const {  } = ;
        const { schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress} = this.ctx.request.body
        console.log(schoolName)
        const school = await this.service.schoolService.create({ schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress});
        this.ctx.status = 201;
        this.ctx.body = school;
    }
}

module.exports = SchoolController;
