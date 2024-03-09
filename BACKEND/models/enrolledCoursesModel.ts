import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userEnrolledCoursesSchema = new mongoose.Schema({
  user: { type: ObjectId, required: true, ref: "User" },
  enrolledCoursesArray: [{ type: ObjectId, ref: "Courses" }],
});

const EnrolledCourses = new mongoose.Model(
  "EnrolledCourses",
  userEnrolledCoursesSchema
);

export default EnrolledCourses;
