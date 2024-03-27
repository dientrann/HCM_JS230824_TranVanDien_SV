import express from 'express';
import taskControler from '../../controllers/task.controler';
import taskMiddleware from '../../middlewares/task.middleware';

const router = express.Router();

router.get('/', taskControler.getAll)
router.get('/:id', taskControler.getById)
router.post('/',taskMiddleware.validateTask, taskControler.create)
router.put('/:id', taskControler.update)
router.delete('/:id', taskControler.delete)

export default router;