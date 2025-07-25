import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { AppError } from "../errors"

export const validateTokem= async(req:Request,res:Response,next:NextFunction):Promise<void>=>{

    let token = req.headers.authorization

    if (!token){
        throw new AppError("Permisao insuficiente",401)
    }

    token = token.split(" ")[1]
    console.log(token,"token")
    jwt.verify(token,process.env.secret_key!,async(error,decoded:any) => {
        if(error){
            // return res.status(401).json({message:error.message})
            throw new AppError(error.message,401)
        }
        if(decoded){
            req.user = {
                id: decoded.id,
                name: decoded.name
            }
        }
    })

    next()
}