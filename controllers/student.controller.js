const Student = require("../models/student.model");

const getAllStudentsHandler = async (req, res) => {
  try {
    const students = await Student.find({});
    if (!students) {
      return res
        .status(404)
        .json({ success: false, message: "Students data not found." });
    }
    return res.status(200).json({ success: true, students: students });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error: error });
  }
};

const addNewStudentHandler = async (req, res) => {
  try {
    const studentData = req.body;
    const newStudent = new Student({ ...studentData });
    await newStudent.save();
    if (!newStudent) {
      return res
        .status(404)
        .json({ success: false, message: "New student not created." });
    }

    return res.status(201).json({
      success: true,
      message: "Student created.",
      student: newStudent,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error: error });
    throw error;
  }
};

const updateStudentDataHandler = async (req, res) => {
  try {
    const { studentId } = req.params;
    const updateData = req.body;
    const studentFound = await Student.findById(studentId);
    if (!studentFound) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found." });
    }
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      updateData,
      { new: true }
    );
    return res.status(200).json({ success: true, student: updatedStudent });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error, message: "Internal server error." });
  }
};

const deleteStudentHandler = async (req, res) => {
  try {
    const { studentId } = req.params;
    const studentFound = await Student.findById(studentId);
    if (!studentFound) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found." });
    }
    await Student.findByIdAndDelete(studentId);

    return res
      .status(200)
      .json({ success: false, message: "student deleted successfully." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};

module.exports = {
  getAllStudentsHandler,
  addNewStudentHandler,
  updateStudentDataHandler,
  deleteStudentHandler
};
