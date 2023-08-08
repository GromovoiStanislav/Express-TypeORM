import express from 'express';
import { Client } from '../entities/Client.js';

const router = express.Router();

router.delete('/api/client/:clientId', async (req, res) => {
  const { clientId } = req.params;

  try {
    const response = await Client.delete(clientId);
    return res.json(response);
  } catch (err) {
    return res.json(err);
  }
});

export { router as deleteClientRouter };
