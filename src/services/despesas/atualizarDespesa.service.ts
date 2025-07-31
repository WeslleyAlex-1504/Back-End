import { creteDespesa, despesaSchema, iUpdateDespesa, returnDespesaSchema } from './../../schemas/despesa.schema';
import { Repository } from "typeorm"
import { Despesas } from "../../entities/despesas.entities"
import { AppDataSource } from "../../data-source"
import { AppError } from '../../errors';


export const atualizarDespesaService = async (ids:number ,body:iUpdateDespesa) => {
     const despesaRepository: Repository<Despesas> = AppDataSource.getRepository(Despesas)

    const FindDespesa:Despesas|null =await despesaRepository.findOne({
             where: {
                 id: ids
             }
         })

    if (!FindDespesa){
        throw new AppError("Despesa não encontrada", 400);
    }     

         const despesaUpdate:creteDespesa = despesaRepository.create({...FindDespesa,...body,});
         await despesaRepository.save(despesaUpdate)
         return despesaUpdate
}