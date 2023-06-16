const mongoose = require("mongoose");


const Schema =mongoose.Schema;

const patientSchema = new Schema(
    {
        PatientNo: {
            type: Number,
            unique: true,
            required: true,
        },
        mobileNo: {
            type: Number,
            unique: true,
            required: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
                },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
            default: "male",
            enum: ["male", "female"]
        },
        password: {
            type: String,
            required: true
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