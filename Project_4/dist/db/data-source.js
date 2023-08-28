import { DataSource } from 'typeorm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const dataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'mydb',
    synchronize: false,
    logging: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    entities: [path.join(__dirname, '../entities/**/**{.ts,.js}')],
};
export default new DataSource(dataSourceOptions);
