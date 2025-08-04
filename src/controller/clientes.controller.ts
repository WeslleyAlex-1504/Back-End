import { Request, Response } from "express"
import { createClienteService } from "../services/clientes/createCliente.service"
import { getAllClienteService } from "../services/clientes/getAllCientes.service"
import { ReturnCliente } from "../schemas/cliente.schema"
import { deleteClienteService } from "../services/clientes/deletecliente.service"
import { getClienteByIdService } from "../services/clientes/getClienteById.service"


export const createClienteController = async(req:Request,res:Response):Promise<any> =>{
    const clienteData = req.body
    const cliente:ReturnCliente = await createClienteService(clienteData)
    return  res.status(201).json(cliente)
    
}
export const getAllClienteController=async(req:Request,res:Response):Promise<any>=>{
    const clientes = await getAllClienteService()
    return res.status(200).json(clientes)
}
export const deleteClienteController=async(req:Request,res:Response):Promise<Response>=>{
    const clienteId:number = parseInt(req.params.id)
    await deleteClienteService(clienteId)
    return res.status(204).send()
}
export const retrieveController=async(req:Request,res:Response):Promise<Response>=>{
    return res.status(200).json(req.user)
}
export const getIdController=async(req:Request,res:Response):Promise<Response>=>{

    const clienteId:number = parseInt(req.params.id)
    const cliente:ReturnCliente = await getClienteByIdService(clienteId)
    return res.status(200).json(cliente)
}
//export { deleteUserService }