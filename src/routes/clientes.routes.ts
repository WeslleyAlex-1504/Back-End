import { Router } from "express";
import { createClienteController, deleteClienteController, getAllClienteController, getIdController, retrieveController } from "../controller/clientes.controller";
import { validateDataMiddleware } from "../middleware/verificarData.middleware";
import { createClienteSchema, updateClienteSchema } from "../schemas/cliente.schema";
import { validateTokem } from "../middleware/verificarToken.middleware";

export const clientesRoutes:Router = Router()

clientesRoutes.post("",validateDataMiddleware(createClienteSchema), createClienteController)
clientesRoutes.get("",getAllClienteController)
clientesRoutes.delete("/:id",validateDataMiddleware, deleteClienteController)
clientesRoutes.patch("/:id",validateTokem, validateDataMiddleware(updateClienteSchema))
clientesRoutes.get("/retrieve",validateTokem, retrieveController)
clientesRoutes.get("/:id", getIdController)