import { Router } from "express"
import { validateDataMiddleware } from "../middleware/verificarData.middleware"
import { clienteLoginSchema } from "../schemas/clientelogin.schema"
import { clienteLoginController } from "../controller/clientelogin.controller"

export const clienteloginRoutes = Router()

clienteloginRoutes.post("",validateDataMiddleware(clienteLoginSchema),clienteLoginController)