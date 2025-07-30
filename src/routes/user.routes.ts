import { Router } from "express";
import { createUserSchema } from "../schemas/usuarios.schemas";
import { validateDataMiddleware } from "../middleware/verificarData.middleware";
import { createUserController, retrieveUserController } from "../controller/user.controller";
import { validateTokem } from "../middleware/verificarToken.middleware";


export const usuariosRoutes:Router = Router()

usuariosRoutes.post("",validateDataMiddleware(createUserSchema), createUserController)
usuariosRoutes.get("/retrieve", validateTokem, retrieveUserController)