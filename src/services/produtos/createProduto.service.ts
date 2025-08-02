import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Produtos } from "../../entities/produto.entities"
import { creteProduto, returnProdutoSchema } from "../../schemas/produto.schemas"
import { AppError } from "../../errors"

export const createProdutoService = async (produto:creteProduto) => {
     const produtoRepository: Repository<Produtos> = AppDataSource.getRepository(Produtos)

     try {
     const produtoCriado = produtoRepository.create(produto)
     await produtoRepository.save(produtoCriado)

     const produtoFinal = returnProdutoSchema.parse(produtoCriado)
     return produtoFinal
          
     } catch (error) {
          throw new AppError("Produto já existe",404)
     }


}