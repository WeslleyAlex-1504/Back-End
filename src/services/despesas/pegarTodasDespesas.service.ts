import { AppDataSource } from '../../data-source';
import { Despesas } from '../../entities/despesas.entities';
import { returnAllDespesasSchema } from './../../schemas/despesa.schema';
import { Like, Repository } from "typeorm"

export const pegarDespesaService = async (name?: string,ano1?: number,mes1?: string,limite?:number,offset?:number) => {
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

const options: any = { where };

  if (typeof limite === "number") {
    options.take = limite;
  }

  if (typeof offset === "number") {
    options.skip = offset;
  }

  const despesas = await despesaRepository.find(options);

  const despesaFinal = returnAllDespesasSchema.parse(despesas);
  return despesaFinal;
};