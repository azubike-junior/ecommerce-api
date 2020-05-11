export default class ResponseTool {
    static httpErrorResponse(res, data, statusCode, message) {
        const error = {
            statusCode: statusCode,
            ...data,
            message
        }
        return res.status(400).json({
            error
        })
    }

    static successResponse(res, data, statusCode, message) {
        statusCode = 200 || 201;
        return res.status(statusCode).json({
            statusCode,
            message,
            data
        })

    }

    static serverError(res) {
        return res.status(500).json({
            error: {
                statusCode: 500,
                message: 'Server Unavailable'
            }
        })
    }
}