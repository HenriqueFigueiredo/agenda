import "reflect-metadata";
import * as dotenv from 'dotenv';
import express from 'express';
import { useContainer, useExpressServer } from 'routing-controllers';
import { container } from 'tsyringe';
import { TsyringeAdapter } from './config/tsyring-adapter';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}
 
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(express.json());

const iocAdapter = new TsyringeAdapter(container)
useContainer(iocAdapter);

useExpressServer(app, {
    controllers: [__dirname + '/controller/**/*.ts']
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});