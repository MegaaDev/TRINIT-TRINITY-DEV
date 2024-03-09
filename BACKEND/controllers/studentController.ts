import Student from "../models/studentModel";
import expressAsyncHandler from "express-async-handler";
import Tutor from "../models/tutorModel";
import Courses from "../models/courseModel";
import EnrolledCourses from "../models/enrolledCoursesModel";
import { Timestamp } from "mongodb";

const registerCourse = expressAsyncHandler(async (req: any, res) => {
  const { course, timeSlots, tutorId } = req.body;
  const student = await Student.findOne({ user: req.user._id });
  const selectedCourse = await Courses.findById(course);
  const enrolledCourse = await EnrolledCourses.findOne({ user: req.user_id });
  const tutor = await Tutor.findById(tutorId);
  if (!student) {
    res.status(404).json({
      status: "fail",
      message: "Student not found",
    });
    return;
  }
  if (!tutor) {
    res.status(404).json({
      status: "fail",
      message: "Tutor not found",
    });
    return;
  }
  if (!selectedCourse || !selectedCourse.duration || !selectedCourse.price) {
    res.status(404).json({
      status: "fail",
      message: "Course not found",
    });
    return;
  }

  const numberOfSlots =
    timeSlots.Monday.length +
    timeSlots.Tuesday.length +
    timeSlots.Wednesday.length +
    timeSlots.Thursday.length +
    timeSlots.Friday.length +
    timeSlots.Saturday.length +
    timeSlots.Sunday.length;

  const coursePrice =
    selectedCourse.price * numberOfSlots * 4 * selectedCourse.duration;

  if (student.credits < coursePrice) {
    res.status(400).json({
      status: "fail",
      message: "You need more credits!",
    });
    return;
  }
  // create an entry if it does not exist, otherwise update existing entry
  if (!enrolledCourse) {
    EnrolledCourses.create({
      user: req.user_id,
      enrolledCoursesArray: [{ courseID: course, courseBookedSlot: timeSlots }],
    });
  } else {
    enrolledCourse.enrolledCoursesArray.push({
      courseID: course,
      courseBookedSlot: timeSlots,
    });
  }
  const expiresIn = new Date();
  expiresIn.setMonth(expiresIn.getMonth() + 1);
  student.tutorsRegistered.push({ tutor, course, expiresIn });
  student.credits -= coursePrice;
  await student.save();
  await enrolledCourse.save();
  res.status(200).json({
    status: "success",
    student,
  });
});

export { registerCourse };
