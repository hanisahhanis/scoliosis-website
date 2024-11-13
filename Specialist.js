import mongoose from 'mongoose';

const specialistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
});

export default mongoose.model('Specialist', specialistSchema);