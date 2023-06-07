const mongoose = require("mongoose");


const Schema =mongoose.Schema;

const doctorSchema = new Schema(
    { 
        doctorNo: {
            type: Number,
            unique: true,
            required: true
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        Specialty: {
            type: String,
            required: true,
        },
        Qualification: {
            type: String,
            required: true,
        },
        Experience: {
            type: Number,
            required: true,
        },
        ContactInfo: {
            type: Number,
            required: true,
            unique: true,
        }
    },
    {
        timestamps: true
    }
);


const doctorModel = mongoose.model("doctors",doctorSchema);


module.exports ={
    doctorModel
}