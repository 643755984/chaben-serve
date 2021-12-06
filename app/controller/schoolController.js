'use strict';

const Controller = require('egg').Controller;

class SchoolController extends Controller {
    async create() {
        const { schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress} = this.ctx.request.body
        const school = await this.service.schoolService.create({ schoolName, schoolType, schoolLevel, schoolLogo, schoolEmail, schoolAddress});
        this.ctx.status = 201;
        this.ctx.body = school;
    }

    async update() {

    }
}

module.exports = SchoolController;
