const {appointmentModel} = require("../models/index");

exports.regAppointment = async(reqbody) => {
    let appointment = new appointmentModel(reqbody);
    return await appointment.save();
}

exports.getAllAppointments = async() => {
    return await appointmentModel.find({},"",{});
}


exports.findDocAppointments = async (doctorNo) => {
    return await appointmentModel.find({ doctorNo: doctorNo }, "", {});
}
