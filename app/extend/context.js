module.exports = {
    addSuccess() {
        this.body = R.getAddSuccessBody()
    },
    listSuccess(data) {
        this.body = R.getListSuccessBody(data)
    },
    deleteSuccess() {
        this.body = R.getDelSuccessBody()
    },
    updateSuccess(data) {
        this.body = R.getUpdateSuccessBody(data)
    }
}

const options = {
    successCode: 200,
    addMsg: '添加成功',
    listMsg: '查找成功',
    deleteMsg: '删除成功',
    updateMsg: '修改成功'
}

class R {
    static getAddSuccessBody(data) {
        return getSuccessBody(options.addMsg, data)
    }

    static getUpdateSuccessBody() {
        return getSuccessBody(options.updateMsg, '')
    }

    static getDelSuccessBody() {
        return getSuccessBody(options.deleteMsg)
    }

    static getSearchSuccessBody() {
        return getSuccessBody()
    }

    static getListSuccessBody(data) {
        return getSuccessBody(options.listMsg, data)
    }

}

function getSuccessBody(msg = '', data) {
    return {
        code: options.successCode,
        msg: msg,
        data: data
    }
}

