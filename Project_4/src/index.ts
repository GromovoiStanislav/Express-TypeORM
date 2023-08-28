import express from 'express';
import dataSource from './db/data-source.js';
import { User } from './entities/user.entity.js';

dataSource
  .initialize()
  .then(async () => {
    const app = express();
    app.use(express.json());

    app.get('/users', async (req, res) => {
      const users = await dataSource.getRepository(User).find();
      res.json(users);
    });

    app.post('/users', async (req, res) => {
      const user = dataSource.getRepository(User).create(req.body);
      const results = await dataSource.getRepository(User).save(user);
      return res.send(results);
    });

    app.listen(3000, () => {
      console.log('Now running on port 3000');
    });
  })
  .catch((error) => console.log(error));
