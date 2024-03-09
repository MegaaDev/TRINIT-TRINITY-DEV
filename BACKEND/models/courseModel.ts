import { ObjectId } from 'mongodb';
import mongoose, { mongo } from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please enter course name.'],
  },
  price: {
    type: Number,
    require: [true, 'Please enter course price.'],
  },
  language: {
    type: String,
    require: [true, 'Please enter course language'],
  },
  description: {
    type: String,
    require: [true, 'Please enter course description.'],
  },
  duration: {
    type: Number,
    require: [true, 'Please enter course duration in months.'],
  },
  weekly_classes_limit: {
    type: Number,
    require: [true, 'Please enter a Weekly Classes Limit'],
  },
  start_date: {
    type: Date,
    require: [true, 'Please enter Course Start Date'],
  },
  end_date: {
    type: Date,
    require: [true, 'Please enter Course End Date'],
  },
  slots: {
    Monday: [
      [
        {
          type: String,
        },
      ],
    ],
    Tuesday: [
      [
        {
          type: String,
        },
      ],
    ],
    Wednesday: [
      [
        {
          type: String,
        },
      ],
    ],
    Thursday: [
      [
        {
          type: String,
        },
      ],
    ],
    Friday: [
      [
        {
          type: String,
        },
      ],
    ],
    Saturday: [
      [
        {
          type: String,
        },
      ],
    ],
    Sunday: [
      [
        {
          type: String,
        },
      ],
    ],
  },
  certified: {
    type: Boolean,
    require: [true, 'Please mark if the course is certified or not'],
  },
  difficulty: {
    type: String,
    enum: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'],
    default: 'BEGINNER',
  },
  creatorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true,
  },
});

const Courses = mongoose.model('Courses', courseSchema);

export default Courses;
