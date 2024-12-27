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

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());

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
        origin: 'http://localhost:3000', 
    }
});

//Setup socket connections
setupSocket(io);

//Start the server 
const PORT = process.env.PORT || 5000; 
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});