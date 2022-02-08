const { CustomException } = require('../utils/customError');

module.exports = (options) => {
    return async function jwtErr(ctx, next) {
        
        const token = ctx.request.header.authorization
        let decode = ''
        if (token) {
            decode = ctx.app.jwt.verify(token, options.secret)
            if(!checkTimeOut(decode.loginTime)) throw new CustomException(401, 'token已过期')
            await next()
        } else {
            throw new CustomException(401, '获取不到token')
        }
    }
}

function checkTimeOut(oldTime) {
    let now = new Date().getTime()
    let old = new Date(oldTime).getTime()
    let result = now - old
    return result > getTimeOut() ? false : true
}

function getTimeOut() {
    return 24 * 60 * 60 * 1000  // 一天
    // return 60 * 1000
}