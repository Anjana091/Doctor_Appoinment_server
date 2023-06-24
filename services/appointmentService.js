const {appointmentModel} = require("../models/index");

exports.regAppointment = async(reqbody) => {
    let appointment = new appointmentModel(reqbody);
    return await appointment.save();
}