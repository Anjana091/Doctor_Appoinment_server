const router = require("express").Router();
const { body, query } = require("express-validator");
const { adminController } = require("../controllers");

const adminBodyValidator = [
    body("fullname").trim().notEmpty(),
    body("password").trim().isLength({ min: 8, max: 20 }),
    body("email").trim().toLowerCase().isEmail()
];

const adminLoginValidator = [
    body("password").trim().isLength({ min: 8, max: 20 }),
    body("email").trim().toLowerCase().isEmail()
];


router.post("/", adminBodyValidator, adminController.registerAdmin);

router.post("/login", adminLoginValidator, adminController.loginAdmin);


module.exports = router;