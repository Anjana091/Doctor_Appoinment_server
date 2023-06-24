const router = require("express").Router();
const { body} = require("express-validator");
const {patientController}=require("../controllers/index");
const { verifyAdmin: { verify } } = require("../middlewares")



const patientLoginValidator = [
    body("password").trim().isLength({ min: 8, max: 20 })
];


router.post("/register",patientController.registerUser);

router.post("/login", patientLoginValidator, patientController.loginUser);

router.get("/all",verify, patientController.getAllUsers);

router.delete("/", patientController.deletePatient);

router.post("/getPatientById", patientController.getPatientById);



module.exports = router;
