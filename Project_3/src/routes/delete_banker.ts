import express from 'express';
import { Banker } from '../entities/Banker.js';

const router = express.Router();

router.delete('/api/banker/:bankerId', async (req, res) => {
  const { bankerId } = req.params;

  try {
    const response = await Banker.delete(bankerId);
    return res.json(response);
  } catch (err) {
    return res.json(err);
  }
});

export { router as deleteBankerRouter };
