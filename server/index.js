import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import routes from './routes';
import { setupMiddlewares } from './middlewares';
import setupSocket from './utils/socket.js';

dotenv.config();

const app = express();
const server = http.createServer(app);

// Setup middlewares
setupMiddlewares(app);

// Setup routes
routes(app);

// Setup Socket.io
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
});

setupSocket(io);

// MongoDB Connection
mongoose.connect(process.env.RESTREVIEWS_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
})
.then(() => {
  console.log('MongoDB Connected');
  const PORT = process.env.PORT || 5001;
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(console.error);

export default server;
