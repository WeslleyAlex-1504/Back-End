import { Repository } from "typeorm"
import { Produtos } from "../../entities/produto.entities"
import { AppDataSource } from "../../data-source"
import { iUpdate, updateProdutoSchema } from "../../schemas/produto.schemas"
import { AppError } from "../../errors"

export const updateProdutoService = async (ids:number, infos:iUpdate) => {
    const produtosRepository: Repository<Produtos> = AppDataSource.getRepository(Produtos)
    
    const FindProduto:Produtos|null =await produtosRepository.findOne({
        where: {
            id: ids
        }
    })
    if(!FindProduto){
        throw new AppError("Produto nao encontrado",404)
    }

    const updateProduto:Produtos = produtosRepository.create({...FindProduto,...infos})
    await produtosRepository.save(updateProduto)
    const produto = updateProdutoSchema.parse(updateProduto)

    return produto


}