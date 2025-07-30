import { Repository } from "typeorm"
import { Produtos } from "../../entities/produto.entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

export const deleteProdutoService = async (ids:number) => {
    const produtosRepository: Repository<Produtos> = AppDataSource.getRepository(Produtos)
    
    const FindProduto:Produtos|null =await produtosRepository.findOne({
        where: {
            id: ids
        }
    })
    if(!FindProduto){
        throw new AppError("Produto nao encontrado",404)
    }

    await produtosRepository.remove(FindProduto)

}