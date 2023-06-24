const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
    {
        PatientNo: {
            type: Number,
            required: true
        },
        doctorNo: {
            type: Number,
            required: true
        },
        doctorInfo: {
            type: String,
            required: true,
        },

        PatientInfo: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const appointmentModel  = mongoose.model("appointments", appointmentSchema);


module.exports = {
    appointmentModel
}