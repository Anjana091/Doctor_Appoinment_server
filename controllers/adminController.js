const { adminService, jwtService } = require("../services/index");
const { validationResult } = require("express-validator")


exports.registerAdmin = async (req, res, next) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Error("Bad Inputs");
        }

        const admin = req.body;
        await adminService.registerAdmin(admin);
        res.setHeader("Content-Type", "application/json");
        res.status(201);
        res.json({ message: "Admin successfully registered", isError: false, data: {} });
    } catch (error) {
        next(error);
    }
}

exports.loginAdmin = async (req, res, next) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Error("Bad Inputs");
        }

        const reqBody = req.body;
        let filters = {
            email: reqBody.email,
            password: reqBody.password
        }
        const admin = await adminService.findAdmin(filters, "", { lean: true });
        if (!admin) {
            res.setHeader("Content-Type", "application/json");
            res.status(200);
            return res.json({ message: "Admin doesnt exists", isError: true, data: {} });
        }

        // create Token

        const token = await jwtService.signAuthToken(admin._id);
        let responsePayload = {
            fullname: admin.fullname,
            email: admin.email,
            token: token
        }
        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.json({ message: "Admin successfully registered", isError: false, data: responsePayload });
    } catch (error) {
        next(error);
    }
}