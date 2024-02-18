const express = require("express");
const {
  getAllStudentsHandler,
  addNewStudentHandler,
} = require("../controllers/student.controller");

const routes = express.Router();

// routes.use("/api", require("./api"));
routes.get("/", (req, res) => {
  res.json("Hello express");
});
routes.get("/students", getAllStudentsHandler);
routes.post("/students", addNewStudentHandler);

module.exports = routes;
