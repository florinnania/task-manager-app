import express, { Request, Response } from 'express';
import { tasks } from './data';
 
const router = express.Router();
 
// Fetch all tasks
router.get('/tasks', (req: Request, res: Response) => {
  res.json(tasks);
});
 
// Mark a task as completed
router.put('/tasks/:id/complete', (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  task.completed = true;
  res.json({ message: 'Task marked as completed' });
});
 
export default router;