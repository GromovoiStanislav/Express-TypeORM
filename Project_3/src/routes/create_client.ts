import express from 'express';
import { Client } from '../entities/Client.js';

const router = express.Router();

router.post('/api/client', async (req, res) => {
  const { firstName, lastName, email, cardNumber, balance } = req.body;

  const client = Client.create({
    first_name: firstName,
    last_name: lastName,
    email,
    card_number: cardNumber,
    balance,
  });

  try {
    await client.save();
    return res.json(client);
  } catch (e) {
    return res.json(e);
  }
});

export { router as createClientRouter };
