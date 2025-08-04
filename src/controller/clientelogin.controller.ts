import { Request, Response } from "express";
import { iClienteLogin, iRetunrClienteLogin } from "../schemas/clientelogin.schema";
import { clienteLoginService } from "../services/login/clientelogin.services";

export const clienteLoginController=async(req:Request,res:Response):Promise<Response>=>{

    const ClienteloginData:iClienteLogin = req.body
    const cliente: iRetunrClienteLogin = await clienteLoginService(ClienteloginData)

    return res.status(200).json(cliente)

}