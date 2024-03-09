import Student from "../models/studentModel";
import expressAsyncHandler from "express-async-handler";
import Tutor from "../models/tutorModel";
import EnrolledCourses from "../models/enrolledCoursesModel";

const registerCourse = expressAsyncHandler(async (req: any, res) => {
  const { course, tutorId } = req.body;
  const student = await Student.findOne({ user: req.user._id });
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
  if (!tutor.availablePlans[course]) {
    res.status(400).json({
      status: "fail",
      message: "Course not available",
    });
    return;
  }
  // create an entry if it does not exist, otherwise update existing entry
  if (!enrolledCourse) {
    EnrolledCourses.create({
      user: req.user_id,
      enrolledCoursesArray: [course],
    });
  } else {
    enrolledCourse.enrolledCoursesArray.push(course);
  }
  const expiresIn = new Date();
  expiresIn.setMonth(expiresIn.getMonth() + 1);
  student.tutorsRegistered.push({ tutor, course, expiresIn });
  await student.save();
  await enrolledCourse.save();
  res.status(200).json({
    status: "success",
    student,
  });
});

export { registerCourse };
