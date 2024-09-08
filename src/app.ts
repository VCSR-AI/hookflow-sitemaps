import { express, Request, Response } from 'express';
import mongoose from 'mongoose';
import sitemapRoutes from './routes/sitemapRoutes';
import webhookRoutes from './routes/webhookRoutes';

const app = express();
const router = new 

// Middleware
app.use(express.json());

// Routes
app.use('/', router.get('/a', async (
  req: Request,
  res: Response
) => {
  res.send('Welcome to the API!');
  console.log("Hello World");
}));

app.use('/sync', sitemapRoutes);
app.use('/webhooks', webhookRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

export default app;
