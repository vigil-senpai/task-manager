const {customAPIError} = require('../errors/custom-error')

const errorHandler = (err, req, res, next) => {
    if(err instanceof customAPIError) {
        return res.status(err.statusCode).json({
            msg: err.message
        })
    }
    if(err._message) {
        return res.status(500).json({
            msg: err._message
        })
    }
    if(err.reason.message) {
        return res.status(500).json({
            msg: err.reason.message
        })
    }
    return res.status(500).json({
        msg: 'Internal server Error'
    })
}

module.exports = errorHandler