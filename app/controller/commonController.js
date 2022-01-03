'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')

class CommonController extends Controller {
    async upload() {
        const { ctx } = this
        let fileStream = await ctx.getFileStream()
        let fileName = new Date().getTime() + fileStream.filename
        let filePath = path.join(this.config.logoDirPath + fileName)

        const upStream = fs.createWriteStream(filePath)

        fileStream.pipe(upStream)

        ctx.customSuccess('上传成功', `/public/logo/${fileName}`)
    }

}

module.exports = CommonController;