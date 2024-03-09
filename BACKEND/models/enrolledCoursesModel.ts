import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userEnrolledCoursesSchema = new mongoose.Schema({
  user: { type: ObjectId, required: true, ref: "User" },
  enrolledCoursesArray: [
    {
      courseID: { type: ObjectId, ref: "Courses" },
      courseBookedSlot: {
        Monday: [
          {
            slot: Number,
          },
        ],
        Tuesday: [
          {
            slot: Number,
          },
        ],
        Wednesday: [
          {
            slot: Number,
          },
        ],
        Thursday: [
          {
            slot: Number,
          },
        ],
        Friday: [
          {
            slot: Number,
          },
        ],
        Saturday: [
          {
            slot: Number,
          },
        ],
        Sunday: [
          {
            slot: Number,
          },
        ],
      },
    },
  ],
});

const EnrolledCourses = new mongoose.Model(
  "EnrolledCourses",
  userEnrolledCoursesSchema
);

export default EnrolledCourses;
