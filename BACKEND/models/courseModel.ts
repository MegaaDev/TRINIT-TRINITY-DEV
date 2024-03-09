import { ObjectId } from "mongodb";
import mongoose, { mongo } from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter course name."],
  },
  price: {
    type: Number,
    require: [true, "Please enter course price."],
  },
  description: {
    type: String,
    require: [true, "Please enter course description."],
  },
  duration: {
    type: Number,
    require: [true, "Please enter course duration."],
  },
  difficulty: {
    type: String,
    enum: ["BEGINNER", "INTERMEDIATE", "ADVANCE"],
    default: "BEGINNER",
  },
  prerequisites: [
    {
      type: ObjectId,
    },
  ],
  creatorID: ObjectId,
});

const Courses = mongoose.model("Courses", courseSchema);

export default Courses;
