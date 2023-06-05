const router = require("express").Router();
const {patientController}=require("../controllers/index");
const { verifyAdmin: { verify } } = require("../middlewares")


router.post("/register",patientController.registerUser);

router.get("/all",verify, patientController.getAllUsers);


module.exports = router;
