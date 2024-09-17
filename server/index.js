import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import jobRoutes from './routes/jobRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js'; 
import { authenticateJWT } from './middlewares/authMiddleware.js'; 
import setupSocket from './utils/socket.js'; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.RESTREVIEWS_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
})
.then(() => console.log('MongoDB Connected'))
.catch((error) => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
});

// Register Routes
app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);
app.use('/notifications', authenticateJWT, notificationRoutes); 

app.get('/', (req, res) => res.send('Welcome to the Job Listing Portal!'));

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running at port ${process.env.PORT || 5000}`);
});

const io = setupSocket(server); 
