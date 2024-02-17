const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    contact: {
      type: Number,
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
