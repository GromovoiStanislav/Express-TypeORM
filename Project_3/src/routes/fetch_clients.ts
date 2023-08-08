import express from 'express';
import { Client } from '../entities/Client.js';

const router = express.Router();

router.get('/api/client/:clientId', async (req, res) => {
  const { clientId } = req.params;

  const clients = await Client.createQueryBuilder('client')
    .leftJoinAndSelect('client.transactions', 'transaction')
    .where('client.id = :clientId', { clientId })
    .getOne();

  return res.json(clients);
});

router.get('/api/client', async (req, res) => {
  const clients = await Client.createQueryBuilder('client')
    .select(['client.id', 'client.first_name'])
    .leftJoinAndSelect('client.transactions', 'transaction')
    .getMany();

  return res.json(clients);
});

export { router as fetchClientsRouter };
