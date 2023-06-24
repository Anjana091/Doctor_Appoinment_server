const patientService = require ("./patientService");
const jwtService = require("./jwtService");
const adminService = require("./adminService");
const doctorService = require("./doctorService")
const appointmentService =require("./appointmentService")

module.exports ={
    patientService,
    jwtService,
    adminService,
    doctorService,
    appointmentService
}