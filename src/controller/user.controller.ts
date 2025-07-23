import { Request, Response } from "express";
import { promise } from "zod";
import { returnUser } from "../schemas/usuarios.schemas";
import { createUserService } from "../services/user/criarUser.service";

export const createUserController = async (req:Request,res:Response):Promise<Response> => {
    const userData = req.body
    console.log(userData,"controller")
    const user:returnUser = await createUserService(userData)
    return  res.status(201).json(user)
}

export const retrieveUserController = async (req:Request,res:Response):Promise<Response> => {
    return res.status(200).json(req.user)
}