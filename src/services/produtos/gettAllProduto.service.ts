import { Repository } from "typeorm"
import { Produtos } from "../../entities/produto.entities"
import { AppDataSource } from "../../data-source"
import { returnAllProdutosSchema } from "../../schemas/produto.schemas"

export const getAllProdutosServices = async () => {
    const produtosRepository: Repository<Produtos> = AppDataSource.getRepository(Produtos)

    const produtos = await produtosRepository.find()
    const produtosReturn = returnAllProdutosSchema.parse(produtos)

    return produtosReturn
}