import { Like, Repository } from "typeorm"
import { Produtos } from "../../entities/produto.entities"
import { AppDataSource } from "../../data-source"
import { returnAllProdutosSchema } from "../../schemas/produto.schemas"

export const getAllProdutosServices = async (name:string|any, inativo:string|any) => {
    const produtosRepository: Repository<Produtos> = AppDataSource.getRepository(Produtos)
    if(name){
        const produtos = await produtosRepository.find(
            {
                where:{
                    nome:Like(`${name}%`)
                }
            }
        )


        
        const produtosReturn = returnAllProdutosSchema.parse(produtos)

        return produtosReturn
    }

    if(inativo){
        const produtos = await produtosRepository.find(
            {
                where:{
                    ativo:false
                }
            }
        )


        
        const produtosReturn = returnAllProdutosSchema.parse(produtos)

        return produtosReturn
    }

    const produtos = await produtosRepository.find()
    const produtosReturn = returnAllProdutosSchema.parse(produtos)

    return produtosReturn
}