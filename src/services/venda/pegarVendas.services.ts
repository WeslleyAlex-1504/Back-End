import { Between, Like, Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Vendas } from "../../entities/vendas.entities"
import { vendasArraySchema } from "../../schemas/venda.schemas"


export const pegarVendaService = async (nomeProduto:string,data:string,offset:number) => {
     const vendaRepository: Repository<Vendas> = AppDataSource.getRepository(Vendas)

     
     if(nomeProduto){
        const vendas = await vendaRepository.find({relations: ["Produto"],
    where: {
        Produto: {
            nome:Like(`${nomeProduto}%`)
        }
    },
    take:8,
    skip:offset
  });
  return vendas
     }

if(data){
const [year, month, day] = data.split('-').map(Number);
const dataInicio = new Date(year, month - 1, day, 0, 0, 0, 0);
const dataFim = new Date(year, month - 1, day, 23, 59, 59, 999);

  const vendas = await vendaRepository.find({
    where: {
      data_venda: Between(dataInicio.toISOString(), dataFim.toISOString())
    },
    take:8,
    skip:offset,
  })
  return vendas
}

    

    const vendas = await vendaRepository.find({
    take:8,
    skip:offset
    })
    const vendasFinal = vendasArraySchema.parse(vendas)
    return vendasFinal
}