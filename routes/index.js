module.exports = (app) =>{
  app.use("/patient",require("./patientRoutes"));
  app.use("/admin", require("./adminRouter"));
  app.use("/doctor",require("./doctorRoute"))
  app.use("/patient",require("./appointmentRouter"))
}