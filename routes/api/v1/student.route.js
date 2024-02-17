const express = require("express");
const {
  getAllStudentsHandler,
  addNewStudentHandler,
  updateStudentDataHandler,
  deleteStudentHandler,
} = require("../../../controllers/student.controller");
const studentRoutes = express.Router();

studentRoutes.get("/", getAllStudentsHandler);
studentRoutes.post("/", addNewStudentHandler);
studentRoutes.post("/:studentId", updateStudentDataHandler);
studentRoutes.delete("/:studentId", deleteStudentHandler);

module.exports = studentRoutes;
