const {patientModel} = require("../models/index");

exports.createUser = async(reqbody) => {
    let patient = new patientModel(reqbody);
    return await patient.save();
}

exports.findPatient = async (filters = {}, projection = "", options = {}) => {
    return await patientModel.findOne(filters, projection, options);
}


exports.getAllPatients = async() => {
    return await patientModel.find({},"",{});
}

exports.deleteOnePatient = async (PatientNo) => {
    return await patientModel.findOneAndDelete({ PatientNo: PatientNo });
}

exports.findOnePatient = async (PatientNo) => {
    return await patientModel.findOne({ PatientNo: PatientNo }, "", {});
}

