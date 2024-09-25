import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User reference
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true }, // Job reference
  status: { type: String, enum: ['pending', 'interview', 'hired', 'rejected'], default: 'pending' },
  appliedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;
