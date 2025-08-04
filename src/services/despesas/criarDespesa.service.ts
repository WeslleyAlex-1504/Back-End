import { creteDespesa, despesaSchema, returnDespesaSchema } from './../../schemas/despesa.schema';
import { Repository } from "typeorm"
import { Despesas } from "../../entities/despesas.entities"
import { AppDataSource } from "../../data-source"
import { AppError } from '../../errors';

export const criarDespesaService = async (despesa:creteDespesa) => {
     const despesaRepository: Repository<Despesas> = AppDataSource.getRepository(Despesas)


     const FindDespesa:Despesas[]|null =await despesaRepository.find({
             where: {
                 nome: despesa.nome
             }
         })

    const despesaRepetida = FindDespesa.some(item => item.mes === despesa.mes && item.ano === despesa.ano);

    if(despesaRepetida){
        throw new AppError("Despesa duplicada para este mês e ano", 400);
    }

    const despesaCriado = despesaRepository.create(despesa)
    await despesaRepository.save(despesaCriado)

    const despesaFinal = returnDespesaSchema.parse(despesaCriado)
    return despesaFinal
}