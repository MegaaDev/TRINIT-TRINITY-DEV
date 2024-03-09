import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  languages: {
    type: [String],
    // required: [true, 'Please enter the language you want to teach'],
  },
  experience: {
    type: Number,
    // required: [true, 'Please enter the language you want to teach'],
  },
  bio: {
    type: String,
    // required: [true, 'Please enter a short bio'],
    maxLength: [500, 'Your bio cannot exceed 500 characters'],
  },
  availableCourses: [
    {
      name: String,
      price: Number,
      language: String,
      description: String,
      duration: Number, // duration of each class
      level: {
        type: String,
        enum: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'],
        default: 'BEGINNER',
      },
    },
  ],
  rating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  resume: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tutor = mongoose.model('Tutor', tutorSchema);

export default Tutor;
