import { Router } from "express";
import { validateDataMiddleware } from "../middleware/verificarData.middleware";
import { updateVendaSchema, vendaReturnSchema, vendaSchema } from "../schemas/venda.schemas";
import { atualizarVendaController, criarVendaController, deletarVendaById, pegarTodasVendasController } from "../controller/venda.controller";


export const vendasRoutes:Router = Router()

vendasRoutes.post("", validateDataMiddleware(vendaSchema), criarVendaController )
vendasRoutes.get("", pegarTodasVendasController)
vendasRoutes.delete("/:id", deletarVendaById)
vendasRoutes.patch("/:id", validateDataMiddleware(updateVendaSchema),atualizarVendaController)