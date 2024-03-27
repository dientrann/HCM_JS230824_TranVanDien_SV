import prismaServices from '../services/prisma'

interface task {
    name: string,
    status: string
}

class userModel {
    async findById (id: number){
        try{
            let task = await prismaServices.task.findUnique({
                where: {
                    id: id
                }
            })
            return {
                data: task
            }
        }catch(err){
            return {
                err
            }
        }
    }
    async getAll(){
        try{
            let tasks = await prismaServices.task.findMany()

            return{
                data: tasks
            }
        }catch(err){
            return{
                err
            }
        }
    }
    async create(task: task){
        try{
            let newTask = await prismaServices.task.create({
                data: task
            })
            return{
                data: newTask
            }

        }catch(err){
            return{
                err
            }
        }
    }
    async update(id: number, updateTask: task){
        try{

            let taskUpdate = await prismaServices.task.update({
                where: {
                    id: id
                },
                data: updateTask
            })
            return{
                data: taskUpdate
            }

        }catch(err){
            return{
                err
            }
        }
    }
    async delete(id: number){
        try{
            let taskDelete = await prismaServices.task.delete({
                where: {
                    id: id
                }
            })
            return{
                data: taskDelete
            }
        }catch(err){
            return{
                err
            }
        }
    }
}

export default new userModel()