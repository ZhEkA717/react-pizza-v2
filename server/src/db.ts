import { Sequelize, Dialect } from "sequelize";

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD;

const dbDriver = process.env.DB_DRIVER as Dialect;
const dbHost = process.env.DB_HOST;
const dbPort = Number(process.env.DB_PORT);


export default new Sequelize(
    dbName,
    dbUser,
    dbPassword,
    {
        dialect: dbDriver,
        host: dbHost,
        port: dbPort
    }
)