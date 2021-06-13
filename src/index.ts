import express from 'express';
import log4js from 'log4js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const logger = log4js.getLogger();
const port = process.env.PORT;

logger.level = process.env.LOG_LEVEL;


logger.info('log4js log info'); 



app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(port, () => console.log(`Running on port ${port}`));