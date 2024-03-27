import express from 'express';
import version1 from './modules/task.module'

const router = express.Router();

router.use('/tasks', version1)

export default router;