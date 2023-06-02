const {patientModel} = require("../models/index");

exports.createUser = async(reqbody) => {
    let patient = new patientModel(reqbody);
    return await patient.save();
}


exports.getAllPatients = async() => {
    return await patientModel.find({},"",{});
}