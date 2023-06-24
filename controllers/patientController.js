const {patientService, jwtService} = require("../services/index");
const { validationResult } = require("express-validator")
const { patientModel } = require("../models");



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


exports.loginUser = async (req, res, next) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Error("Bad Inputs");
        }

        const reqBody = req.body;
        let filters = {
            mobileNo: reqBody.mobileNo,
            password: reqBody.password
        }
        const patient = await patientService.findPatient(filters, "", { lean: true });
        if (!patient) {
            res.setHeader("Content-Type", "application/json");
            res.status(200);
            return res.json({ message: "User doesnt exists", isError: true, data: {} });
        }

        // create Token

        const token = await jwtService.signAuthToken(patient._id);
        let responsePayload = {
            PatientNo:patient.PatientNo,
            fullname: patient.fullname,
            mobileNo: patient.mobileNo,
            token: token
        }
        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "Admin successfully registered", isError: false, data: responsePayload });
    } catch (error) {
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

exports.deletePatient =async (req, res, next) => {
    try {
        let reqQuery = req.query;

        await patientService.deleteOnePatient(reqQuery.PatientNo);
        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "Patient successfully deleted", isError: false, data: {} });

    } catch (error) {
        console.log(error);
        next(error);
    }
}


exports.getPatientById = async (req, res, next) => {
    try {
        let reqBody = req.body;
        const patient = await patientService.findOnePatient(reqBody.PatientNo);


        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "Patient successfully retrieved", isError: false, data: { patient: patient } });

    } catch (error) {
        console.log(error);
        next(error);
    }
}
