import { Request, Response } from "express"
import { criarVendaService } from "../services/venda/criarVenda.service"
import { pegarVendaService } from "../services/venda/pegarVendas.services"
import { deletarVenda } from "../services/venda/deletarVendas.service"
import { atualizarVendaService } from "../services/venda/atualizarVenda.service"


export const criarVendaController = async (req:Request,res:Response):Promise<Response> => {
    const venda = req.body
    const vendaReturn = await criarVendaService(venda)
    return  res.status(201).json(vendaReturn)
}

export const pegarTodasVendasController = async (req:Request,res:Response):Promise<Response> => {
    const nomeDoProduto = req.query.nomeDoProduto as string
    const data = req.query.data as string
    const vendaReturn = await pegarVendaService(nomeDoProduto,data)
    return  res.status(200).json(vendaReturn)
}

export const deletarVendaById = async (req:Request,res:Response):Promise<Response> => {
    const { id } = req.params
    await deletarVenda(parseInt(id))
    return  res.status(200).send("Venda deleta")
}

export const atualizarVendaController = async (req:Request,res:Response):Promise<Response> => {
    const data = req.body
    const { id } = req.params
    const venda = await atualizarVendaService(parseInt(id),data)
    return  res.status(200).send("Produto Atualizado")
}