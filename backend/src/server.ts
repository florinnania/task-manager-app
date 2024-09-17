import express from 'express';
import cors from 'cors';
import taskRouter from './taskController';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/task', taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
