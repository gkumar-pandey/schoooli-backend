const express = require("express");
const {
  getAllTeachersDataHandler,
  addNewTeacherHandler,
  updateTeacherDataHandler,
  deleteTeacherHandler,
} = require("../../../controllers/teacher.controller");
const teacherRoutes = express.Router();

teacherRoutes.get("/", getAllTeachersDataHandler);
teacherRoutes.post("/", addNewTeacherHandler);
teacherRoutes.post("/:teacherId", updateTeacherDataHandler);
teacherRoutes.delete("/:teacherId", deleteTeacherHandler);

module.exports = teacherRoutes;
