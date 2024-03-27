import { Request, Response, NextFunction } from 'express'

class taskMiddleware {
    validateTask(req: Request, res: Response, next: NextFunction) {
        try {
            let task = {
                name: req.body.name,
                status: req.body.status
            }
            if (!task.name || task.name == '') {
                throw {
                    message: 'Task name is required'
                }
            }
            if (!task.status || task.status == '') {
                throw {
                    message: 'Task status is required'
                }
            }
            if(task.name.length > 200){
                throw {
                    message: 'Task name is too long'
                }
            }
            next();
        } catch (err: any) {
            res.status(500).json({
                message: err.message || "Server Error"
            })
        }
    }
}
export default new taskMiddleware();