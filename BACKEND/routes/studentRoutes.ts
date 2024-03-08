import { registerCourse } from "../controllers/studentController";
import { protect, restricTo } from "../controllers/userController";
import express from "express";


const router = express.Router();

router.post("/registerCourse", protect, restricTo("STUDENT"), registerCourse);