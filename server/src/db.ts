import { Sequelize, Dialect } from "sequelize";
import {config} from 'dotenv';
config();

const dbName = String(process.env.DB_NAME);
const dbUser = String(process.env.DB_USER);
const dbPassword = String(process.env.DB_PASSWORD);


const dbHost = process.env.DB_HOST;
const dbPort = Number(process.env.DB_PORT);


export default new Sequelize(
    dbName,
    dbUser,
    dbPassword,
    {
        dialect: "postgres",
        host: dbHost,
        port: dbPort
    }
)