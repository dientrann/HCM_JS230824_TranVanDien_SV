import express from 'express';
import apis from './routes/index'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use('/apis', cors(), bodyParser.json(), apis)

app.listen(8080, ()=>{
    console.log('Server is running on http://localhost:8080');
})