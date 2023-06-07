const {doctorService} = require("../services/index");


exports.registerDoctor =async (req, res, next) => {
    try {

        let reqBody = req.body;

        const doctor = await doctorService.createDoctor(reqBody);

        console.log("hai " + doctor.fullname);
        res.setHeader("Content-Type", "application/json");
        res.status(201);
        res.json({ message: "Doctor successfully registered", isError: false, data: { doctor: doctor } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getAllDoctors = async (req, res, next) => {
    try {
        let reqQuery = req.query;

        const doctors = await doctorService.getAllDoctor();


        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "Doctors successfully retrieved", isError: false, data: { doctors: doctors } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.deleteDoctor =async (req, res, next) => {
    try {
        let reqQuery = req.query;

        await doctorService.deleteOneDoctor(reqQuery.doctorNo);
        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "Doctor successfully deleted", isError: false, data: {} });

    } catch (error) {
        console.log(error);
        next(error);
    }
}