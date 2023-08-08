import express from 'express';
import { Banker } from '../entities/Banker.js';

const router = express.Router();

router.get('/api/banker/:bankerId', async (req, res) => {
  const { bankerId } = req.params;

  const bankers = await Banker.createQueryBuilder('banker')
    .leftJoinAndSelect('banker.clients', 'clients')
    .where('banker.id = :bankerId', { bankerId })

    .getOne();

  return res.json(bankers);
});

router.get('/api/banker', async (req, res) => {
  const bankers = await Banker.createQueryBuilder('banker')
    .leftJoinAndSelect('banker.clients', 'clients')
    .getMany();

  return res.json(bankers);
});

export { router as fetchBankersRouter };
