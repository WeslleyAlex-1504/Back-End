import { Repository } from "typeorm"
import { Clientes } from "../../entities/cliente.entities"
import { AppDataSource } from "../../data-source"
import { returnAllClienteSchema, ReturnCliente, ReturnClientes } from "../../schemas/cliente.schema"

export const getAllClienteService=async():Promise<ReturnClientes>=>{
    const clienteRepository:Repository<Clientes> = AppDataSource.getRepository(Clientes)

    const findCliente = await clienteRepository.find()
    const clientes = returnAllClienteSchema.parse(findCliente)
    return clientes

}