import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {deleteClienteController} from "../../controller/clientes.controller"
import { CreateCliente } from "../../schemas/cliente.schema";
import { AppError } from "../../errors";
import {compare} from "bcryptjs"
import jwt from "jsonwebtoken"
import { boolean, number } from "zod";
import { Clientes } from "../../entities/cliente.entities";

export const deleteClienteService = async(clienteId:number):Promise<void>=>{
    const clienteRepository : Repository<Clientes> = AppDataSource.getRepository(Clientes)

    const findCliente : Clientes|null = await clienteRepository.findOne({
        where:{
            id:clienteId
        }
    })
    if(!findCliente){
        throw new AppError("Cliente não encontrado", 404)
    }

    await clienteRepository.remove(findCliente)

}