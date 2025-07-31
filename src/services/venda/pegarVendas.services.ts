import { Like, Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Vendas } from "../../entities/vendas.entities"
import { vendasArraySchema } from "../../schemas/venda.schemas"


export const pegarVendaService = async (nomeProduto:string,data:string) => {
     const vendaRepository: Repository<Vendas> = AppDataSource.getRepository(Vendas)

     if(nomeProduto){
        const vendas = await vendaRepository.find({relations: ["Produto"],
    where: {
        Produto: {
            nome:Like(`${nomeProduto}%`)
        }
    }
  });
  return vendas
     }

     if(data){
        const vendas = await vendaRepository.find({
            where: {
            data_venda: data
            }
        })
        return vendas
     }

    

    const vendas = await vendaRepository.find()
    const vendasFinal = vendasArraySchema.parse(vendas)
    return vendasFinal
}