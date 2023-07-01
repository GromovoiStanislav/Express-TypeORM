import {DataSource} from 'typeorm'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {User} from "./entity/user.entity.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    // entities: [User],
    entities: [path.join(__dirname, './entity/**/**{.ts,.js}')],
    // entities: [path.join(__dirname, './entity/user.entity.ts')],
})
