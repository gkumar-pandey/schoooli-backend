const express = require("express");
const studentRoutes = require("./student.route");
const teacherRoutes = require("./teacher.route");
const routes = express.Router();

routes.use("/students", studentRoutes);
routes.use("/teachers", teacherRoutes);

module.exports = routes;
