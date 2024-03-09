import express from 'express';
import {
  getTutorById,
  getTutorByLanguage,
  getAllTutors,
  createTutor,
  updateTutor,
  isTutor,
} from '../controllers/tutorController';
import { protect, restricTo } from '../controllers/userController';

const router = express.Router();

router.get('/', getAllTutors);
router.get('/:id', getTutorById);
router.get('/language/:language', getTutorByLanguage);
router.post('/', protect, restricTo('TUTOR'), createTutor);
router.patch(
  '/:id',
  // protect, restricTo('TUTOR'), isTutor,
  updateTutor
);
// router.patch("/plan/:id", protect, restricTo("TUTOR"), isTutor ,updateTutorPlan);

export default router;
