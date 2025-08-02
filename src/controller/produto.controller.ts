import { Request, Response } from "express";
import { createProdutoService } from "../services/produtos/createProduto.service";
import { creteProduto, iUpdate, returnAllProduto, returnProduto } from "../schemas/produto.schemas";
import { getAllProdutosServices } from "../services/produtos/gettAllProduto.service";
import { updateProdutoService } from "../services/produtos/updateProduto.service";
import { deleteProdutoService } from "../services/produtos/deleteProduto.services";

export const createProdutoController = async (req:Request,res:Response):Promise<Response> => {
    const user:creteProduto = req.body
    const produto:returnProduto=  await createProdutoService(user)
    return res.status(200).json(produto)
}

export const getAllProdutosController = async (req:Request,res:Response):Promise<Response> => {
    const name = req.query.name
    const inativo = req.query.inativo
    const produto:returnAllProduto=  await getAllProdutosServices(name,inativo)
    return res.status(200).json(produto)
}

export const updateProdutoController = async (req:Request,res:Response):Promise<Response> => {
    const id = parseInt(req.params.id)
    const infos = req.body
    const produto =  await updateProdutoService(id, infos)
    return res.status(200).json(produto)
}

export const deleteProdutoController = async (req:Request,res:Response):Promise<Response> => {
    const id = parseInt(req.params.id)
    const produto =  await deleteProdutoService(id)
    return res.status(200).send("Produto Deletado")
}