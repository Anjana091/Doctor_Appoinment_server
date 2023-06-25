const router = require("express").Router();
const {appointmentController}=require("../controllers/index");



//book appoinment router

router.post("/book-appointment",appointmentController.bookAppointment);

router.post("/booking-availbility",appointmentController.bookingAvailbility);


module.exports = router;
