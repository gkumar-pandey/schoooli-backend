const Teacher = require("../models/teacher.model");

const getAllTeachersDataHandler = async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    if (!teachers) {
      return res
        .status(404)
        .json({ success: false, message: "Teachers not found." });
    }
    return res.status(200).json({ success: true, teachers: teachers });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

const addNewTeacherHandler = async (req, res) => {
  try {
    const teacherData = req.body;
    const newTeacher = new Teacher({ ...teacherData });
    await newTeacher.save();
    if (!newTeacher) {
      return res
        .status(404)
        .json({ success: false, message: "Teacher not created." });
    }

    return res.status(201).json({ success: true, teacher: newTeacher });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw error;
  }
};

const updateTeacherDataHandler = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const updateData = req.body;
    const teacherFound = await Teacher.findById(teacherId);
    if (!teacherFound) {
      return res
        .status(404)
        .json({ success: false, message: "Teacher not found." });
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      updateData,
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Teacher updated.",
      teacher: updatedTeacher,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

const deleteTeacherHandler = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const teacherFound = await Teacher.findById(teacherId);
    if (!teacherFound) {
      return res
        .status(404)
        .json({ success: false, message: "Teacher not found." });
    }
    await Teacher.findByIdAndDelete(teacherId);
    return res
      .status(200)
      .json({ success: true, message: "Deleted successfully." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
    throw error;
  }
};

module.exports = {
  getAllTeachersDataHandler,
  addNewTeacherHandler,
  updateTeacherDataHandler,
  deleteTeacherHandler,
};
