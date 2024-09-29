import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/user.routes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import { authenticateJWT } from './middlewares/authMiddleware.js';
import setupSocket from './utils/socket.js';
import applicationRoutes from './routes/applicationRoutes.js';

dotenv.config();

const app = express(); 

app.use(cors({
    origin: 'http://localhost:3000', 
}));
app.use(express.json());

console.log('Database URI:', process.env.RESTREVIEWS_DB_URI);
console.log('Server running on port:', process.env.PORT || 5000);
console.log('JWT Secret:', process.env.JWT_SECRET);

// MongoDB Connection
mongoose.connect(process.env.RESTREVIEWS_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
})
.then(() => console.log('MongoDB Connected'))
.catch((error) => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
});

app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);
app.use('/users', userRoutes); 
app.use('/notifications', authenticateJWT, notificationRoutes); 
app.use('/applications', authenticateJWT, applicationRoutes);

app.get('/', (req, res) => res.send('Welcome to the Job Listing Portal!'));

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running at port ${process.env.PORT || 5000}`);
});

setupSocket(server);