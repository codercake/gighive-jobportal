import express from 'express'; 
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// MongoDB connection
mongoose.connect(process.env.RESTREVIEWS_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err))