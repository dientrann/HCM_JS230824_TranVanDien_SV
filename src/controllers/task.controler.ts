import { Request, Response } from 'express'
import taskModel from '../models/task.model'

class taskController {
    async create(req: Request, res: Response){
        try{
            let newTask = {
                name: req.body.name,
                status: req.body.status,
            }
            let {err, data} = await taskModel.create(newTask)
            if(err){
                throw {
                    message:"Error Create"
                }
            }
            return res.status(200).json({
                message: "Create Success",
                data: data
            })
        }catch(err){
            return res.status(500).json({
                message:"Server Error"
            })
        }
    }

    async getAll(req: Request, res: Response){
        try{
            let {err, data} = await taskModel.getAll()
            if(err){
                throw {
                    message:"Error Get All"
                }
            }
            return res.status(200).json({
                message: "Get All Success",
                data: data
            })

        }catch(err){
            return res.status(500).json({
                message:"Server Error"
            })
        }
    }

    async getById(req: Request, res: Response){
        try{
            let idTask = Number(req.params.id)
            let {err, data} = await taskModel.findById(idTask)

            if(err){
                throw {
                    message: "Error Get By Id"
                }
            }
            return res.status(200).json({
                message: "Get By Id Success",
                data: data
            })
        }catch(err){
            return res.status(500).json({
                message:"Server Error"
            })
        }
    }
    async update(req: Request, res: Response){
        try{

            let idTask = Number(req.params.id)
            let result = await taskModel.findById(idTask)
            if(result.err){
                throw {
                    message: "No Task"
                }
            }
            let dataUpdate = {
                ...result.data,
                ...req.body
            }
            console.log(dataUpdate);
            
            let {err, data} = await taskModel.update(idTask, dataUpdate)

            if(err){
                
                throw {
                    message: "Error Update"
                }
            }
            return res.status(200).json({
                message: "Update Success",
                data: data
            })
        }catch(err){
            return res.status(500).json({
                message:"Server Error"
            })
        }
    }
    async delete(req: Request, res: Response){
        try{
            let idTask = Number(req.params.id)
            let {err, data} = await taskModel.delete(idTask)
            if(err){
                throw {
                    message: "Error Delete"
                }
            }
            return res.status(200).json({
                message: "Delete Success",
                data: data
            })
        }catch(err){
            
        }
    }
}
export default new taskController()