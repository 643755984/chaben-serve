module.exports = () => {
    return async function errrorHanlder(ctx, next) {
		try {
			await next();
		} catch (error) {
			// 记录日志用
			ctx.app.emit('error', error, ctx)
			// 校验错误处理
			if(error.status && error.status === 401) {
				ctx.status = 401
				ctx.body = {
					message: error.message,
				}
			}else if (error.status && error.status === 422) {
				ctx.body = {
					code: 201,
					msg: 'fail',
					data: error.errors[0].err[0],
				}
			}else {
				// 同一异常返回
				//  console.log('----------------', error.status)
				ctx.status = error.status || 501;
				ctx.body = {
					code: 202,
					msg: 'fail',
					data: error.message,
				}
			}
		
		}
    }
  }
  