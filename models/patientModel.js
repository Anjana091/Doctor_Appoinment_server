const mongoose = require("mongoose");


const Schema =mongoose.Schema;

const patientSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        age: {
            type: Number,
            required: true,
            min: 1
        },
        gender: {
            type: String,
            required: true,
            default: "male",
            enum: ["male", "female"]
        },
        PatientNo: {
            type: Number,
            unique: true,
            min: 1
        }
    },
    {
        timestamps: true
    }
);


const patientModel = mongoose.model("patients",patientSchema);


module.exports ={
    patientModel
}