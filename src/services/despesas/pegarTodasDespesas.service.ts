import { AppDataSource } from '../../data-source';
import { Despesas } from '../../entities/despesas.entities';
import { returnAllDespesasSchema } from './../../schemas/despesa.schema';
import { Like, Repository } from "typeorm"

export const pegarDespesaService = async (name?: string,ano1?: number,mes1?: string) => {
  const despesaRepository: Repository<Despesas> = AppDataSource.getRepository(Despesas);

  const where: any = {};

  if (name) {
    where.nome = Like(`${name}%`);
  }

  if (ano1) {
    where.ano = ano1;
  }

  if (mes1) {
    where.mes = Like(`${mes1}%`);
  }

  const despesas = await despesaRepository.find({ where });

  const despesaFinal = returnAllDespesasSchema.parse(despesas);
  return despesaFinal;
};