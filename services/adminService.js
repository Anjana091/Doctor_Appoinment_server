const { adminModel } = require("../models")



exports.registerAdmin = async (reqBody) => {
    return await adminModel.create(reqBody);
}

exports.findAdmin = async (filters = {}, projection = "", options = {}) => {
    return await adminModel.findOne(filters, projection, options);
}