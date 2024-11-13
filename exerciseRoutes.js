import express from 'express';
import Exercise from '../models/Exercise.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const exercises = await Exercise.find({ user: req.userId });
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exercises' });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { name, duration, date } = req.body;
    const exercise = new Exercise({ name, duration, date, user: req.userId });
    await exercise.save();
    res.status(201).json(exercise);
  } catch (error) {
    res.status(500).json({ message: 'Error creating exercise' });
  }
});

export default router;