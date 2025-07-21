import { Router } from "express";
import { createUserSchema } from "../schemas/usuarios.schemas";
import { validateDataMiddleware } from "../middleware/verificarData.middleware";
import { createUserController } from "../controller/user.controller";


export const usuariosRoutes:Router = Router()

usuariosRoutes.post("",validateDataMiddleware(createUserSchema), createUserController)