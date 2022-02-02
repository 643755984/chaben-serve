'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')

class CommonController extends Controller {
    async upload() {
        const { ctx } = this
        let fileStream = await ctx.getFileStream()

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

    async uploadOnBase64() {
        let { ctx } = this
        var base_64_url = ctx.request.body.img

        let fileName = new Date().getTime() + '.jpg'
        let filePath = path.join(this.config.imgDirPath + fileName)
        let base64 = base_64_url.replace(/^data:image\/\w+;base64,/, "") //去掉图片base64码前面部分data:image/png;base64

        let dataBuffer = Buffer.from(base64, 'base64')
        
        let result = await new Promise((resolve, reject) => {
            fs.writeFile(filePath, dataBuffer, function(err){
                if(err){
                    resolve(err)
                }else{
                    resolve(true)
                    
                }
            })
        })
        if(result === true) ctx.customSuccess('上传成功', `/public/${fileName}`)
    }
}

module.exports = CommonController;