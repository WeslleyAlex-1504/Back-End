import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Produtos } from "../../entities/produto.entities"
import { creteProduto, returnProdutoSchema } from "../../schemas/produto.schemas"

export const createProdutoService = async (produto:creteProduto) => {
     const userRepository: Repository<Produtos> = AppDataSource.getRepository(Produtos)

     const produtoCriado = userRepository.create(produto)
     await userRepository.save(produtoCriado)

     const produtoFinal = returnProdutoSchema.parse(produtoCriado)
     return produtoFinal
}