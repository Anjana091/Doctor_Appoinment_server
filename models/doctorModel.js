const mongoose = require("mongoose");


const Schema =mongoose.Schema;

const doctorSchema = new Schema(
    { 
        doctortNo: {
            type: Number,
            unique: true,
            min: 1
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
            unique: true,
        },
        ContactInfo: {
            type: Number,
            unique: true,
        },
        gender: {
            type: String,
            required: true,
            default: "male",
            enum: ["male", "female"]
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