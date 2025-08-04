import { Request, Response } from "express";
import { returnDespesa } from "../schemas/despesa.schema";
import { criarDespesaService } from "../services/despesas/criarDespesa.service";
import { pegarDespesaService } from "../services/despesas/pegarTodasDespesas.service";
import { deletarDespesaService } from "../services/despesas/deletarDespesa.service";
import { atualizarDespesaService } from "../services/despesas/atualizarDespesa.service";

export const criarDespesaController = async (req:Request,res:Response):Promise<Response> => {
    const body = req.body
    const despesa = await criarDespesaService(body)
    return res.status(200).json(despesa)
}

export const pegarTodasDespesaController = async (req:Request,res:Response):Promise<Response> => {
    const name = req.query.name as string
    const ano1 = parseInt(req.query.ano as string);
    const mes1 = req.query.mes as string
    const despesas = await pegarDespesaService(name,ano1,mes1)
    return res.status(200).json(despesas)
}

export const deletarDespesaController = async (req:Request,res:Response):Promise<Response> => {
    const id  = req.params.id
    await deletarDespesaService(parseInt(id))
    return res.status(200).send("Despesa deletada")
}

export const atualizarDespesaController = async (req:Request,res:Response):Promise<Response> => {
    const id  = req.params.id
    const body = req.body
    const despesa = await atualizarDespesaService(parseInt(id), body)
    return res.status(200).json(despesa)
}