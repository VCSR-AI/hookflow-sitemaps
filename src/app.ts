import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors'; // Import CORS middleware
import webhookRoutes from './routes/webhookRoutes';
import sitemapRoutes from './routes/sitemapRoutes';
import validateUrl from './middleware/validateUrl';

const app = express();

// Use CORS middleware with no restrictions
app.use(cors())

// @TODO: Add Restrictions sometime; example: 
// {
//   origin: 'http://localhost:3000', // Replace with your frontend's origin
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type']
// }

// Middleware
app.use(express.json());

app.use('/webhooks', webhookRoutes);
app.use('/fetch-sitemap', validateUrl, sitemapRoutes);

// MongoDB Connection
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//   });

export default app;