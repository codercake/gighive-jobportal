import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import jobRoutes from './routes/jobRoutes.js'; 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.RESTREVIEWS_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); 
    }
};

connectDB();

// Register Routes
app.use('/api/v1', jobRoutes); 

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Job Listing Portal!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
});
