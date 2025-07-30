import { Repository } from 'typeorm';
import { venda, vendaReturnSchema, vendaSchema } from '../../schemas/venda.schemas';
import { AppDataSource } from '../../data-source';
import { Vendas } from '../../entities/vendas.entities';
import { Produtos } from '../../entities/produto.entities';
import { AppError } from '../../errors';

export const criarVendaService = async (venda:venda) => {
     const vendaRepository: Repository<Vendas> = AppDataSource.getRepository(Vendas)
     const produtoRepository: Repository<Produtos> = AppDataSource.getRepository(Produtos)

     const FindProduto:Produtos|null =await produtoRepository.findOne({
             where: {
                 id: venda.produtoId
             }
         })
         if(!FindProduto){
             throw new AppError("Produto nao encontrado",404)
         }
    

    const vendaCriado = vendaRepository.create({
    quantidade: venda.quantidade,
    lucro: venda.lucro,
    Produto: FindProduto,
     })
     await vendaRepository.save(vendaCriado)

     const vendaFinal = vendaReturnSchema.parse(vendaCriado)
     return vendaFinal
}