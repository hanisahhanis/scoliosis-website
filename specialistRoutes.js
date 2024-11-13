import express from 'express';
import Specialist from '../models/Specialist.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const specialists = await Specialist.find();
    res.json(specialists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching specialists' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const specialist = await Specialist.findById(req.params.id);
    if (!specialist) return res.status(404).json({ message: 'Specialist not found' });
    res.json(specialist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching specialist' });
  }
});

export default router;