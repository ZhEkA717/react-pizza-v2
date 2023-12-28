import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from "express";
import sequelize from './db';
import cors from 'cors';
import fileUpload from 'express-fileupload'
import router from './routes/index';
import errorHandler from './middleware/ErrorHandlingMiddleware';
import path from 'path';

const models = import('./models/models');

const PORT = process.env.PORT || 7000;

// -----------------------------------------
// sequelize.sync({force: true}).then(async () => {
//     for (let i = 0; i < 3; i++) {
//         const user = {}
//         await Category.create(user);
//     }
// })
// -----------------------------------------

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`[server]: Server is running at http://localhost:${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();