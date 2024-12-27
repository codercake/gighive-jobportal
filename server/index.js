import express from 'express';
import cors from 'cors';
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

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
}));

app.use(express.json());

const RESTREVIEWS_DB_URI = 'mongodb+srv://codercake:root098mern@job-listing-portal.hokev.mongodb.net/joblisting_portal?retryWrites=true&w=majority&appName=Job-Listing-Portal';
const RESTREVIEWS_NS = 'jobs';
const PORT = process.env.PORT || 5001;

// MongoDB Connection
mongoose.connect(RESTREVIEWS_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  });

// API routes
app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);
app.use('/users', userRoutes);
app.use('/notifications', authenticateJWT, notificationRoutes);
app.use('/applications', authenticateJWT, applicationRoutes);

// Root route to test API
app.get('/', (req, res) => res.send('Welcome to the Job Listing Portal!'));

// Create the HTTP server and socket server
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  }
});

// Set up socket connections
setupSocket(io);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
