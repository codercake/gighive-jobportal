import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import http from 'http'; 
import { Server } from 'socket.io'; 
import authRoutes from './routes/auth.route.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/user.routes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import { authenticateJWT } from './middlewares/authMiddleware.js';
import setupSocket from './utils/socket.js';  
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const clientURL = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(cors({
    origin: clientURL, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, 
}));

app.use(express.json()); //express-app
app.use(cookieParser()); //dependency for cookieParser

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

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: clientURL,  // Allow socket.io connections from the frontend client URL (or localhost in dev)
    }
});

// Setup socket connections
setupSocket(io);

// Start the server 
const PORT = process.env.PORT || 5001; 
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
