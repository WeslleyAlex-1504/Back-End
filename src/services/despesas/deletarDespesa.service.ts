import { AppDataSource } from '../../data-source';
import { Despesas } from '../../entities/despesas.entities';
import { AppError } from '../../errors';
import { returnAllDespesasSchema } from './../../schemas/despesa.schema';
import { Repository } from "typeorm"

export const deletarDespesaService = async (ids:number) => {
     const despesaRepository: Repository<Despesas> = AppDataSource.getRepository(Despesas)

    const FindDespesa:Despesas|null =await despesaRepository.findOne({
             where: {
                 id: ids
             }
         })

    if (!FindDespesa){
        throw new AppError("Despesa não encontrada", 400);
    }     

    await despesaRepository.remove(FindDespesa)
}