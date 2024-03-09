import expressAsyncHandler from "express-async-handler";
import Courses from "../models/courseModel";
import EnrolledCourses from "../models/enrolledCoursesModel";
import { ObjectId, Query } from "mongoose";

const getAllTutorCourses = expressAsyncHandler(async (req: any, res) => {
  const tutorID = req.body;
  const courses = await Courses.find({ creatorID: tutorID });
  if (courses.length == 0) {
    res.status(404).json({
      status: "failure",
      message: "You may need to create more courses!",
    });
  } else {
    res.status(200).json({
      status: "success",
      courses,
    });
  }
});

const getAllStudentCourses = expressAsyncHandler(async (req: any, res) => {
  const studentID = req.body;
  const enrolledCourses = await EnrolledCourses.findOne({
    user: studentID,
  }).populate("enrolledCoursesArray");
  if (enrolledCourses.enrolledCoursesArray.length == 0) {
    res.status(404).json({
      status: "failure",
      message: "You might want to enroll in more courses!",
    });
  } else {
    res.status(200).json({
      status: "success",
      enrolledCourses: enrolledCourses.enrolledCoursesArray,
    });
  }
});

const getAllAvailableCourses = expressAsyncHandler(async (req: any, res) => {
  const courses = await Courses.find();
  if (courses.length == 0) {
    res.status(404).json({
      status: "failure",
      message: "No courses are available. Try again later?",
    });
  } else {
    res.status(200).json({
      status: "success",
      courses,
    });
  }
});

export { getAllAvailableCourses, getAllStudentCourses, getAllTutorCourses };
