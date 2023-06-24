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
        },
        fees: {
            type: Number,
            required: true,
          },
         tokenPerDay: {
           type: Number,
           required: true,
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