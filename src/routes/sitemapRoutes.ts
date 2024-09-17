import { Router, Request, Response } from 'express';
import { handleSitemap } from '../controllers/sitemapController';

const router = Router();

// router.get('/', (req: Request, res: Response) => res.send('This service expects to receive an an authorized webhook POST from an authorized source.  You are neither.'));
router.post('/', handleSitemap);

export default router;
