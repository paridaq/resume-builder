import express ,{Response,Request} from 'express'

type User = {
    name:string;
}


export const registerUser = async(req:Request,res:Response):Promise<any>=>{
    const {name } = req.body as User
    if(!name){
        return res.send({
            message:'name is required to proceed further'
        })
    }
    try {
        
    } catch (error) {
        
    }
}