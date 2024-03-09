import expressAsyncHandler from 'express-async-handler';
import Courses from '../models/courseModel';
import EnrolledCourses from '../models/enrolledCoursesModel';
import mongoose, { ObjectId, Query } from 'mongoose';
import Tutor from '../models/tutorModel';

const getAllTutorCourses = expressAsyncHandler(async (req: any, res) => {
  const tutorID = req.params.id;
  const courses = await Courses.find({ creatorID: tutorID });
  if (courses.length == 0) {
    res.status(404).json({
      status: 'failure',
      message: 'You may need to create more courses!',
    });
  } else {
    res.status(200).json({
      status: 'success',
      courses,
    });
  }
});

const getAllStudentCourses = expressAsyncHandler(async (req: any, res) => {
  const studentID = req.params.id;
  const enrolledCourses = await EnrolledCourses.findOne({
    user: studentID,
  }).populate('courseID');
  if (enrolledCourses?.enrolledCoursesArray.length == 0) {
    res.status(404).json({
      status: 'failure',
      message: 'You might want to enroll in more courses!',
    });
  } else {
    res.status(200).json({
      status: 'success',
      enrolledCourses: enrolledCourses?.enrolledCoursesArray,
    });
  }
});

const getAllAvailableCourses = expressAsyncHandler(async (req: any, res) => {
  const courses = await Courses.find();
  if (courses.length == 0) {
    res.status(404).json({
      status: 'failure',
      message: 'No courses are available. Try again later?',
    });
  } else {
    res.status(200).json({
      status: 'success',
      courses,
    });
  }
});

const createCourse = expressAsyncHandler(async (req: any, res) => {
  console.log(new mongoose.Types.ObjectId(req.body.tutorId));
  console.log(req.body.slots);
  const courseData = {
    name: req.body.name,
    description: req.body.description,
    language: req.body.language,
    difficulty: String(req.body.level).toUpperCase(),
    certified: req.body.certified == 'YES' ? true : false,
    price: req.body.pricing,
    weekly_classes_limit: req.body.weeklyClasses,
    start_date: req.body.startDate,
    slots: req.body.slots,
    end_date: req.body.endDate,
    duration: req.body.courseDuration,
    creatorID: new mongoose.Types.ObjectId(req.body.tutorId),
  };
  const createdCourse = await Courses.create(courseData);

  res.status(201).json({
    status: 'success',
    message: `Succesfully created course ${courseData}`,
    data: createdCourse,
  });
});

const updateCourse = expressAsyncHandler(async (req: any, res) => {
  const { courseID, courseDescription } = req.body;
  const course = await Courses.findById(courseID);
  if (!course) {
    res.status(404).json({
      status: 'failure',
      message: `Error fetching course ${courseID}`,
    });
    return;
  }
  course.description = courseDescription;

  await course.save();
  res.status(200).json({
    status: 'success',
    course,
  });
});

const deleteCourse = expressAsyncHandler(async (req: any, res) => {
  const courseID = req.params.id;
  const course = await Courses.findByIdAndDelete(courseID);
  if (!course) {
    res.status(404).json({
      status: 'failure',
      message: `Error removing course ${courseID}`,
    });
  } else {
    res.status(200).json({
      status: 'success',
      course,
    });
  }
});

export {
  getAllAvailableCourses,
  getAllStudentCourses,
  getAllTutorCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
