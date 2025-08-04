import { iUpdateDespesa, updateDespesaSchema } from './../schemas/despesa.schema';
import { Router } from "express";
import { validateDataMiddleware } from "../middleware/verificarData.middleware";
import { despesaSchema } from "../schemas/despesa.schema";
import { atualizarDespesaController, criarDespesaController, deletarDespesaController, pegarTodasDespesaController } from "../controller/despesas.controller";

export const despesasRoutes:Router = Router()

despesasRoutes.post("", validateDataMiddleware(despesaSchema), criarDespesaController)
despesasRoutes.get("", pegarTodasDespesaController)
despesasRoutes.delete("/:id", deletarDespesaController)
despesasRoutes.patch("/:id", validateDataMiddleware(updateDespesaSchema), atualizarDespesaController)