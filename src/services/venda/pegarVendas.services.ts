import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Vendas } from "../../entities/vendas.entities"
import { vendasArraySchema } from "../../schemas/venda.schemas"


export const pegarVendaService = async () => {
     const vendaRepository: Repository<Vendas> = AppDataSource.getRepository(Vendas)

    const vendas = await vendaRepository.find()
    const vendasFinal = vendasArraySchema.parse(vendas)
    return vendasFinal
}