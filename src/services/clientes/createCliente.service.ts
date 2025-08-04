import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Clientes } from "../../entities/cliente.entities"
import {  CreateCliente, ReturnCliente, returnClienteSchema } from "../../schemas/cliente.schema"
import { AppError } from "../../errors"

export const createClienteService=async(clienteData:CreateCliente):Promise<ReturnCliente>=>{
    const clienteRepository: Repository<Clientes> = AppDataSource.getRepository(Clientes)
    
    const findCliente: Clientes | null = await clienteRepository.findOne({
        where:{
            email:clienteData.email
        },
        
    })
    if(findCliente){
        throw new AppError("e-mail já cadastrado",409)
    }
    const CreateCliente = clienteRepository.create(clienteData)
    await clienteRepository.save(CreateCliente)
    const cliente = returnClienteSchema.parse(CreateCliente)
    return cliente

}