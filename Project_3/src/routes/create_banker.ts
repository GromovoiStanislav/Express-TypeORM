import express from 'express';
import { Banker } from '../entities/Banker.js';

const router = express.Router();

router.post('/api/banker', async (req, res) => {
  const { firstName, lastName, email, cardNumber, employeeNumber } = req.body;

  const banker = Banker.create({
    first_name: firstName,
    last_name: lastName,
    email,
    card_number: cardNumber,
    employee_number: employeeNumber,
  });

  try {
    await banker.save();
    return res.json(banker);
  } catch (e) {
    return res.json(e);
  }
});

export { router as createBankerRouter };
