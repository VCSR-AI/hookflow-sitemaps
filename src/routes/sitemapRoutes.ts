import { Router } from 'express';
import { getSitemap } from '../controllers/sitemapController';

const router = Router();

router.get('/', getSitemap);

export default router;
