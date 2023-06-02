const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const adminSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
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


const adminModel = mongoose.model("admins", adminSchema);


module.exports = {
    adminModel
}