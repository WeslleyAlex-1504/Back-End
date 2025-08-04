import { Repository } from "typeorm";
import { ReturnCliente, returnClienteSchema } from "../../schemas/cliente.schema";
import { Clientes } from "../../entities/cliente.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const getClienteByIdService=async(clienteId:number):Promise<ReturnCliente>=>{
    const clienteRepository:Repository<Clientes> = AppDataSource.getRepository(Clientes)

    const findCliente:Clientes|null = await clienteRepository.findOne({
        where:{
            id: clienteId
        }
    })
    if(!findCliente){
        throw new AppError("Cliente não encontrado",404)
    }
    const cliente = returnClienteSchema.parse(findCliente)
    return cliente
}