import express from "express";
import { protect, restricTo } from "../controllers/userController";
import { getAllAvailableCourses, getAllStudentCourses, getAllTutorCourses } from "../controllers/coursesController";

const router = express.Router();

router.get("/courses/", protect, restricTo("STUDENT"), getAllAvailableCourses);
router.post("/myCourses/", protect, restricTo("STUDENT"), getAllStudentCourses);
router.post("/tutorCourses/", protect, restricTo("STUDENT"), getAllTutorCourses)
