const {doctorModel} = require("../models/index");

exports.createDoctor = async(reqbody) => {
    let doctor = new doctorModel(reqbody);
    return await doctor.save();
}


exports.getAllDoctor = async() => {
    return await doctorModel.find({},"",{});
}

exports.deleteOneDoctor = async (doctorNo) => {
    return await doctorModel.findOneAndDelete({ doctorNo: doctorNo });
}
