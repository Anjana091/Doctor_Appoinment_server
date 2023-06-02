
const createError = require('http-errors');
const { jwtService } = require("../services")


exports.verify = async (req, res, next) => {
    try {
        const token = await jwtService.getAuthTokenFromHeaders(req);
        if (!token) {
            throw new Error();
        }
        const decode = await jwtService.verifyAuthToken(token, false);
        if (decode && decode._id) {
            req.admin = {
                _id: decode._id
            }
            return next();
        }
        throw new Error();
    } catch (error) {
        next(createError(401));
    }
}


