import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Vendas } from "../../entities/vendas.entities"
import { iUpdateVenda, venda } from "../../schemas/venda.schemas"
import { AppError } from "../../errors"
import { Produtos } from "../../entities/produto.entities"

export const atualizarVendaService = async (produto:number, body:iUpdateVenda) => {
     const vendaRepository: Repository<Vendas> = AppDataSource.getRepository(Vendas)
     const produtoRepository: Repository<Produtos> = AppDataSource.getRepository(Produtos)

     const FindVenda:Vendas|null =await vendaRepository.findOne({
             where: {
                 id: produto
             }
         })
         if(!FindVenda){
             throw new AppError("venda nao encontrado",404)
         }

    if (body.sabor) {
        const novoProduto = await produtoRepository.findOneBy({ nome: body.sabor });
        if (!novoProduto) throw new AppError("Produto não encontrado pelo sabor fornecido", 404);
        FindVenda.Produto = novoProduto;
        FindVenda.sabor = novoProduto.nome; 
  }


         const vendaUpdate:venda = vendaRepository.create({...FindVenda,...body,});
         await vendaRepository.save(vendaUpdate)
         console.log(vendaUpdate)
}