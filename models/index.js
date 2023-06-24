const {patientModel}= require("./patientModel");
const { adminModel } = require("./adminModel");
const {doctorModel} =require ("./doctorModel")
const {appointmentModel}=require("./appointmentModel")

module.exports ={
    patientModel,
    adminModel,
    doctorModel,
    appointmentModel
}