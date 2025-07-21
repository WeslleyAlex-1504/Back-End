import { Router } from "express";
import { validateDataMiddleware } from "../middleware/verificarData.middleware";
import { loginSchemas } from "../schemas/login.schemas";
import { loginAdmin } from "../controller/login.controller";

export const loginRoutes:Router = Router()

loginRoutes.post("", validateDataMiddleware(loginSchemas), loginAdmin)