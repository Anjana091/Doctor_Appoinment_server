module.exports = (app) =>{
  app.use("/patient",require("./patientRoutes"));
  app.use("/admin", require("./adminRouter"));

  
}