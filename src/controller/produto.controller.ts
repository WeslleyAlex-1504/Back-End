import { Request, Response } from "express";
import { createProdutoService } from "../services/produtos/createProduto.service";
import { creteProduto, returnAllProduto, returnProduto } from "../schemas/produto.schemas";
import { getAllProdutosServices } from "../services/produtos/gettAllProduto.service";

export const createProdutoController = async (req:Request,res:Response):Promise<Response> => {
    const user:creteProduto = req.body
    const produto:returnProduto=  await createProdutoService(user)
    return res.status(200).json(produto)
}

export const getAllProdutosController = async (req:Request,res:Response):Promise<Response> => {
    const produto:returnAllProduto=  await getAllProdutosServices()
    return res.status(200).json(produto)
}