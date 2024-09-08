import { Request, Response } from 'express';
import CustomerRecord from '../models/customerRecord';

export const getSitemap = async (req: Request, res: Response) => {
  try {
    const subdomain = req.subdomains[0];
    const customer = await CustomerRecord.findOne({ siteID: subdomain });

    if (!customer) {
      return res.status(404).send('Customer not found');
    }

    // Generate sitemap logic here
    res.send(`Sitemap for ${subdomain}`);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};
