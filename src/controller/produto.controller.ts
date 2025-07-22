import { Request, Response } from "express";
import { createProdutoService } from "../services/produtos/createProduto.service";
import { creteProduto, returnProduto } from "../schemas/produto.schemas";

export const createProdutoController = async (req:Request,res:Response):Promise<Response> => {
    const user:creteProduto = req.body
    const produto:returnProduto=  await createProdutoService(user)
    return res.status(200).json(produto)
}