class CustomException extends Error {
    constructor(status, msg) {
        super();
        this.status = status;
        this.message = msg
    }
}

module.exports = { CustomException }