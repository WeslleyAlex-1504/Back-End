import { Repository } from "typeorm";
import { iClienteLogin, iRetunrClienteLogin, returnClienteLoginSchema } from "../../schemas/clientelogin.schema";
import { Clientes } from "../../entities/cliente.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken"
import {compare} from "bcryptjs"

export const clienteLoginService=async(clienteloginData:iClienteLogin):Promise<iRetunrClienteLogin>=>{

    const clienteRepository:Repository<Clientes> = AppDataSource.getRepository(Clientes)

    const findCliente:Clientes|null = await clienteRepository.findOne({
        where:{
            email: clienteloginData.email
        }
    })
    if(!findCliente){
        throw new AppError("Credenciais inválidas",401)
    }
    const descrypt = await compare(clienteloginData.password,findCliente.password)
   console.log(descrypt,"decrypt")
   if(!descrypt){
    throw new AppError("Credenciais inválidas",401)
   }
   
        const token = jwt.sign({
            id:findCliente.id,
            email:findCliente.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn:"24h",
            subject:String(findCliente.id)
        }
    )
    const cliente = returnClienteLoginSchema.parse({
        token,
        cliente:findCliente
    })
        return cliente
    
}