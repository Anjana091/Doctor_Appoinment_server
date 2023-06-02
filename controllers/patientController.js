const {patientService} = require("../services/index");


exports.registerUser =async (req, res, next) => {
    try {

        let reqBody = req.body;

        const patient = await patientService.createUser(reqBody);

        console.log("hai " + patient.fullname);
        res.setHeader("Content-Type", "application/json");
        res.status(201);
        res.json({ message: "patient successfully registered", isError: false, data: { patient: patient } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getAllUsers = async (req, res, next) => {
    try {
        let reqQuery = req.query;

        const patients = await patientService.getAllPatients();


        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "patient successfully retrieved", isError: false, data: { patients: patients } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}