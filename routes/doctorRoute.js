const router = require("express").Router();
const {doctorController}=require("../controllers/index");


router.post("/register",doctorController.registerDoctor);

router.get("/all", doctorController.getAllDoctors);

router.delete("/", doctorController.deleteDoctor);


module.exports = router;
