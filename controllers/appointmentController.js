const {appointmentService} = require("../services/index");


exports.bookAppointment =async (req, res, next) => {
    try {

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