import { DataSource, DataSourceOptions } from 'typeorm';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'mydb',
  synchronize: false,
  logging: false,

  entities: [path.join(__dirname, '../entities/**/**{.ts,.js}')],
  migrations: [path.join(__dirname, './migrations/*.js')],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

/* 
migrations:
npm run build
typeorm migration:generate src/db/migrations/NewMigration -d dist/db/data-source.js

npm run build
typeorm migration:run -d dist/db/data-source.js

typeorm migration:revert -d dist/db/data-source.js
typeorm schema:drop -d dist/db/data-source.js
*/
