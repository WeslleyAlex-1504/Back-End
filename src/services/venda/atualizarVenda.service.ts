import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Vendas } from "../../entities/vendas.entities"
import { iUpdateVenda, venda } from "../../schemas/venda.schemas"
import { AppError } from "../../errors"

export const atualizarVendaService = async (produto:number, body:iUpdateVenda) => {
     const vendaRepository: Repository<Vendas> = AppDataSource.getRepository(Vendas)

     const FindVenda:Vendas|null =await vendaRepository.findOne({
             where: {
                 id: produto
             }
         })
         if(!FindVenda){
             throw new AppError("venda nao encontrado",404)
         }
     
         const novo = {...FindVenda,...body}

         const vendaUpdate:venda = vendaRepository.create({...FindVenda,...body,});
         await vendaRepository.save(vendaUpdate)
         console.log(vendaUpdate)
}