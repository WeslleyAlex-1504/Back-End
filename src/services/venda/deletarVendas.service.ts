import { Repository } from "typeorm"
import { Vendas } from "../../entities/vendas.entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

export const deletarVenda = async (produto:number) => {
     const vendaRepository: Repository<Vendas> = AppDataSource.getRepository(Vendas)

     const FindVenda:Vendas|null =await vendaRepository.findOne({
             where: {
                 id: produto
             }
         })
         if(!FindVenda){
             throw new AppError("Produto nao encontrado",404)
         }
     
         await vendaRepository.remove(FindVenda)
}