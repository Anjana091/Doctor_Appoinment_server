const router = require("express").Router();
const {patientController}=require("../controllers/index");


router.post("/register",patientController.registerUser);

router.get("/all", patientController.getAllUsers);


module.exports = router;
