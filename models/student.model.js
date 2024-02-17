const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?w=826&t=st=1708208348~exp=1708208948~hmac=0a62d5babc16f1b28cd3eda3156689ff724623b347dcd0ed423cfb62ce6e77ce",
    },
    age: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    attendance: {
      type: Number,
    },
    marks: {
      type: Number,
    },
    phoneNumber: {
      type: String,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
