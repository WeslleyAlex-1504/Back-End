import { Router } from "express";
import { validateDataMiddleware } from "../middleware/verificarData.middleware";
import { produtoSchema } from "../schemas/produto.schemas";
import { createProdutoController } from "../controller/produto.controller";

export const produtosRoutes:Router = Router()

produtosRoutes.post("",validateDataMiddleware(produtoSchema), createProdutoController)