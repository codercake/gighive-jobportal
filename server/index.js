import express from 'express'; 
import cors from 'cors';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

const port = process.env.PORT || 8001;
        
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });