import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from './auth';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', authRouter);

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});