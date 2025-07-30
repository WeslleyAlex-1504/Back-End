import { Router } from "express";
import { validateDataMiddleware } from "../middleware/verificarData.middleware";
import { produtoSchema, updateProdutoSchema } from "../schemas/produto.schemas";
import { createProdutoController, deleteProdutoController, getAllProdutosController, updateProdutoController } from "../controller/produto.controller";

export const produtosRoutes:Router = Router()

produtosRoutes.get("", getAllProdutosController)

produtosRoutes.post("",validateDataMiddleware(produtoSchema), createProdutoController)
produtosRoutes.patch("/:id", validateDataMiddleware(updateProdutoSchema), updateProdutoController)
produtosRoutes.delete("/:id", deleteProdutoController)