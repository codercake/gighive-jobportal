import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posted_date: {
        type: Date,
        default: Date.now
    }
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
