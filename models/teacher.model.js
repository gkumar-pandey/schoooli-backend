const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:"https://res.cloudinary.com/dlykup1dh/image/upload/v1708214730/dummy/man_dzvfxr.png"
    },
    contact: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      enums: ["Math", "Science", "English", "Computer"],
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
