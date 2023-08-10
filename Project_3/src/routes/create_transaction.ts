import express from 'express';
import { Client } from '../entities/Client.js';
import { Transaction, TransactionType } from '../entities/Transaction.js';

const router = express.Router();

router.post('/api/client/:clientId/transaction', async (req, res) => {
  const { clientId } = req.params;

  const { type, amount } = req.body;

  const client = await Client.findOne({
    where: { id: parseInt(clientId) },
    relations: ['transactions'],
  });

  if (!client) {
    return res.json({
      msg: 'client not found',
    });
  }

  const transaction = await Transaction.create({
    amount,
    type,
    client,
  });

  try {
    await transaction.save();
  } catch (err) {
    res.json(err);
  }

  if (type === TransactionType.DEPOSIT) {
    client.balance = +client.balance + parseInt(amount);
  } else if (type === TransactionType.WITHDRAW) {
    client.balance = +client.balance - parseInt(amount);
  }

  client.transactions.push(transaction);

  try {
    await client.save();
    return res.json(transaction);
  } catch (err) {
    res.json(err);
  }
});

export { router as createTransactionRouter };
