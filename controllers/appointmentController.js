const { appointmentModel } = require("../models");
const { appointmentService, patientService } = require("../services/index");
const moment = require('moment')

exports.bookAppointment = async (req, res, next) => {
    try {

        req.body.date = moment(req.body.date, 'DD-MM-YYYY').add(1, 'day').toISOString()
        let reqBody = req.body;
        const appointment = await appointmentService.regAppointment(reqBody);

        res.setHeader("Content-Type", "application/json");
        res.status(201);
        res.json({ message: "Appoinment Succesfully booked", isError: false, data: { appointment: appointment } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}




exports.bookingAvailbility = async (req, res, next) => {
    try {

        const date = moment(req.body.date, 'DD-MM-YYYY').add(1, 'day').toISOString();
        const doctorNo = req.body.doctorNo
        const token =req.body.tokenPerDay
        const appointments = await appointmentModel.find({
            doctorNo: doctorNo,
            date: date
        });
        if (appointments.length >=  token ) {
            return res.status(200).send({
                message: "appoinment is not available",
                success: false
            })
        } else {
            return res.status(200).send({
                message: "appoinment is Available",
                success: true
            })
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}



exports.appointments = async (req, res, next) => {
    try {
        let reqQuery = req.query;
        const appointments = await appointmentService.getAllAppointments();

        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "Appointments successfully retrieved", isError: false, data: { appointments: appointments } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}



exports.getAppointmentByDocId = async (req, res, next) => {
    try {
        let reqBody = req.query;
        const appointment = await appointmentService.findDocAppointments(reqBody.doctorNo);


        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "Appointment successfully retrieved", isError: false, data: { appointment: appointment } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}