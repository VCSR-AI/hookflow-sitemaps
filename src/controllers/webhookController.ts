import { Request, Response } from 'express';
import CustomerRecord from '../models/customerRecord';

export const handleWebhook = async (req: Request, res: Response) => {
  try {
    const event = req.body;

    // Handle Webflow webhook events
    switch (event._type) {
      case 'site_publish':
        // Upsert site data
        break;
      // Handle other cases
    }

    res.status(200).send('Webhook received');
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};
