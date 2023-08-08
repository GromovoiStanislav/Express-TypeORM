import express from 'express';
import { createClientRouter } from './routes/create_client.js';
import { createBankerRouter } from './routes/create_banker.js';
import { connectBankerToClientRouter } from './routes/connect_banker_to_client.js';
import { createTransactionRouter } from './routes/create_transaction.js';
import { deleteClientRouter } from './routes/delete_client.js';
import { deleteBankerRouter } from './routes/delete_banker.js';
import { fetchClientsRouter } from './routes/fetch_clients.js';
import { fetchBankersRouter } from './routes/fetch_bankers.js';
import dataSource from './db/data-source.js';

dataSource
  .initialize()
  .then(async () => {
    const app = express();
    app.use(express.json());

    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(connectBankerToClientRouter);
    app.use(createTransactionRouter);
    app.use(deleteClientRouter);
    app.use(deleteBankerRouter);
    app.use(fetchClientsRouter);
    app.use(fetchBankersRouter);

    app.listen(8080, () => {
      console.log('Now running on port 8080');
    });
  })
  .catch((error) => console.log(error));
