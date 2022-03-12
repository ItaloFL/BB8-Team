import express from 'express';
import { routes } from './routes/routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes)

app.listen('3333', () => {
  console.log('Server is runnig in port 3333 🌈')
})