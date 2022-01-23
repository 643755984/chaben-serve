'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')

class CommonController extends Controller {
    async upload() {
        const { ctx } = this
        let fileStream = await ctx.getFileStream()
        console.log(fileStream)
        let fileName = new Date().getTime() + fileStream.filename
        let filePath = path.join(this.config.imgDirPath + fileName)

        let result = await new Promise((resolve, rejects) => {
            const upStream = fs.createWriteStream(filePath)
            fileStream.pipe(upStream)

            upStream.on('error', err => {
                upStream.destroy()
                rejects(err)
            })

            upStream.on('finish', () => {
                resolve(true)
            })
        })

        if(result === true) ctx.customSuccess('上传成功', `/public/${fileName}`)
    }
}

module.exports = CommonController;